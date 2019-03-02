
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProjectTask } from "../../actions/projectTaskActions";
import './Men.css';


class ProjectTaskItem extends Component {
  onDeleteClick(pt_id) {
    this.props.deleteProjectTask(pt_id);
  }

  render() {
    const { project_task } = this.props;
    return (
      <div className="card mb-1">
        <div className="card-header text-primary">ID: {project_task.id}</div>
        <div className="card-body"> 
           <h5 className="card-title">{project_task.city}</h5>
          <p className="card-text text-truncate ">
            {project_task.country}
          </p>
          <hr class="list"/>
          <Link
            to={`updateProjectTask/${project_task.id}`}
            className="btn btn-primary"
          >
            View / Update
          </Link>

          <button
            className="btn btn-danger ml-4"
            onClick={this.onDeleteClick.bind(this, project_task.id)}
          >
            Delete
          </button>
        </div>
       
      </div>
      
    );
  }
}

ProjectTaskItem.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProjectTask }
)(ProjectTaskItem);
