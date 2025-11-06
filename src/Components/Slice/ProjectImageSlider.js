import { useState, useEffect } from 'react';

const ProjectImageSlider = ({ data }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Check if data exists and has more than 1 item for slider
  const showSlider = data && data.length > 1;

  const openLightbox = (index) => {
    setActiveIndex(index);
    setZoomLevel(1);
    setSlideDirection('');
    setDragOffset({ x: 0, y: 0 });
    // Use setTimeout to ensure smooth opening
    requestAnimationFrame(() => {
      setLightboxOpen(true);
    });
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoomLevel(1);
    setSlideDirection('');
    setDragOffset({ x: 0, y: 0 });
    document.body.style.overflow = ''; // Restore scroll
  };

  const handleNext = () => {
    if (!isTransitioning && activeIndex < data.length - 1) {
      setIsTransitioning(true);
      setSlideDirection('left');
      setZoomLevel(1);
      setDragOffset({ x: 0, y: 0 });
      setTimeout(() => {
        setActiveIndex(activeIndex + 1);
        setTimeout(() => {
          setSlideDirection('');
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning && activeIndex > 0) {
      setIsTransitioning(true);
      setSlideDirection('right');
      setZoomLevel(1);
      setDragOffset({ x: 0, y: 0 });
      setTimeout(() => {
        setActiveIndex(activeIndex - 1);
        setTimeout(() => {
          setSlideDirection('');
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
    if (zoomLevel - 0.5 <= 1) {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
  };

  // Drag handlers for zoomed image
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setDragOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - dragOffset.x,
        y: e.touches[0].clientY - dragOffset.y
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
      setDragOffset({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === '0') resetZoom();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, activeIndex, isTransitioning]);

  // Mouse event listeners for dragging
  useEffect(() => {
    if (!lightboxOpen) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [lightboxOpen, isDragging, dragStart, dragOffset]);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <>
      <div className='modern-project-gallery'>
        {showSlider ? (
          <div className='gallery-grid'>
            {data.map((featured, index) => (
              <div
                key={index}
                className='gallery-item'
                onClick={() => openLightbox(index)}
              >
                <img
                  src={`/project/featured/${featured}`}
                  alt={`Project screenshot ${index + 1}`}
                  loading="lazy"
                />
                <div className='gallery-overlay'>
                  <i className="fa-solid fa-search-plus"></i>
                  <span>Click to view</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Single image
          <div className='single-image' onClick={() => openLightbox(0)}>
            <img
              src={`/project/featured/${data[0]}`}
              alt="Project screenshot"
              loading="lazy"
            />
            <div className='gallery-overlay'>
              <i className="fa-solid fa-search-plus"></i>
              <span>Click to view</span>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className='lightbox-modal' onClick={closeLightbox}>
          {/* Close Button */}
          <button className='lightbox-close' onClick={closeLightbox} aria-label="Close">
            <i className="fa-solid fa-times"></i>
          </button>

          {/* Zoom Controls */}
          <div className='zoom-controls' onClick={(e) => e.stopPropagation()}>
            <button onClick={handleZoomOut} disabled={zoomLevel <= 1} aria-label="Zoom out">
              <i className="fa-solid fa-search-minus"></i>
            </button>
            <span className='zoom-level'>{Math.round(zoomLevel * 100)}%</span>
            <button onClick={handleZoomIn} disabled={zoomLevel >= 3} aria-label="Zoom in">
              <i className="fa-solid fa-search-plus"></i>
            </button>
            <button onClick={resetZoom} disabled={zoomLevel === 1} aria-label="Reset zoom">
              <i className="fa-solid fa-compress"></i>
            </button>
          </div>

          {/* Image Counter */}
          <div className='lightbox-counter' onClick={(e) => e.stopPropagation()}>
            {activeIndex + 1} / {data.length}
          </div>

          {/* Navigation Buttons */}
          {data.length > 1 && (
            <>
              <button
                className='lightbox-nav prev'
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                disabled={activeIndex === 0}
                aria-label="Previous image"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <button
                className='lightbox-nav next'
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                disabled={activeIndex === data.length - 1}
                aria-label="Next image"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </>
          )}

          {/* Main Image - Scrollable Content */}
          <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
            <div
              className='lightbox-image-wrapper'
              style={{
                transform: `scale(${zoomLevel}) translate(${dragOffset.x / zoomLevel}px, ${dragOffset.y / zoomLevel}px)`,
                cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={`/project/featured/${data[activeIndex]}`}
                alt={`Project screenshot ${activeIndex + 1}`}
                className={`lightbox-image ${slideDirection ? `slide-${slideDirection}` : ''}`}
                draggable={false}
              />
            </div>
          </div>

          {/* Thumbnail Strip */}
          {data.length > 1 && (
            <div className='lightbox-thumbnails' onClick={(e) => e.stopPropagation()}>
              {data.map((featured, index) => (
                <div
                  key={index}
                  className={`lightbox-thumb ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => {
                    if (!isTransitioning && index !== activeIndex) {
                      setIsTransitioning(true);
                      setSlideDirection(index > activeIndex ? 'left' : 'right');
                      setZoomLevel(1);
                      setDragOffset({ x: 0, y: 0 });
                      setTimeout(() => {
                        setActiveIndex(index);
                        setTimeout(() => {
                          setSlideDirection('');
                          setIsTransitioning(false);
                        }, 50);
                      }, 300);
                    }
                  }}
                >
                  <img
                    src={`/project/featured/${featured}`}
                    alt={`Thumbnail ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectImageSlider;
