import { NavLink } from "react-router-dom";
import LineClipPath from "./Slice/LineClipPath";
import data from "../api/projects.json";
import TeamProjectData from "../api/teamprojects.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProjectItem({ itemCount, viewAll, otherItem }) {
  const projects = data.slice(0, itemCount).map((p, index) => {
    if (index <= 5) {
      return (
        <div className="project container" key={index} data-aos="flip-left">
          <div className="content">
            <div className={`details ${p.id % 2 === 0 ? "order-last" : ""}`}>
              <LineClipPath content={`0${p.id}`} />
              <h3 className="title-4 m-0 pb-2">{p.company}</h3>
              <p className="text-muted mb-4 mb-md-5 f-text-m">
                {p.description}
              </p>
              <NavLink to={`/project/${p.url}/`} className="button-52 button">
                View project &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
            <div className="image">
              <LazyLoadImage
                src={require(`../assets/images/project/${p.image}`)}
                className="my-image"
                alt={p.company}
              />
            </div>
          </div>
        </div>
      );
    }
  });

  const soloProjects = data.slice(6, itemCount).map((p, index) => {
    return (
      <div
        className="col-md-6 col-lg-4 col-sm-6 pt-2 pb-2"
        key={index}
        data-aos="flip-left"
      >
        <NavLink to={`/project/${p.url}/`} className="card-link">
          <div className="card bgColor p-3 mb-2 shadow project-card h-100">
            <div className="d-flex justify-content-between">
              <div className="badge badge-project">
                {" "}
                <span>{p.type}</span>{" "}
              </div>
              <LineClipPath
                content={`${p.id <= 9 ? "0" + p.id : p.id}`}
                xtraClass={"line-small"}
              />
            </div>
            <div className="mt-4">
              <h3>{p.company}</h3>
              <div className="mt-3">
                <span className="text-muted">
                  {p.description.length > 200
                    ? `${p.description.substring(0, 200)}...`
                    : p.description}
                </span>
              </div>
            </div>
            <>
              <NavLink target={"_blank"} to={`${p.url}/`} className="link mt-2">
                <i className="fa-solid fa-chevron-right"></i>{" "}
                <span>View project</span>
              </NavLink>
            </>
          </div>
        </NavLink>
      </div>
    );
  });

  const teamProjects = TeamProjectData.map((val, count) => {
    return (
      <tr>
        <td className="mobile-hide">{count + 1}</td>
        <td>{val.name}</td>
        <td>
          <a href={val.link} target="_blank">
            {val.link_name}
          </a>
        </td>
        <td>
          <div className="tool-used">
            {val.tools.map(function (tool, i) {
              return <span key={i}>{tool}</span>;
            })}
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      {projects}
      {otherItem ? (
        <>
          <div className="container pt-5">
            <h4 className="f-text-m">Solo Projects</h4>
            <div className="row project-row">{soloProjects}</div>
          </div>

          <div className="container pt-5">
            <h4 className="f-text-m pb-2">Team Projects</h4>
            <table className="table textColor table-bordered-mode table-responsive">
              <thead className="bgMain">
                <tr>
                  <th className="mobile-hide">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Website</th>
                  <th scope="col">Tools / Responsibilities</th>
                </tr>
              </thead>
              <tbody>{teamProjects}</tbody>
            </table>
          </div>
        </>
      ) : (
        ""
      )}

      {viewAll ? (
        <div className="d-flex justify-content-center pb-5">
          <NavLink
            to="/project/"
            className="button-50 button"
            data-aos="fade-up"
          >
            View all projects &nbsp;
            <i className="fa-solid fa-arrow-right text-center"></i>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProjectItem;
