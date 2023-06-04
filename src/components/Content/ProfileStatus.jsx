import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    ClickForEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    DiactivateClickForEditMode () {
        this.setState({
            editMode: false
        })
        this.props.UpdateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

  render() {
    return (
      <div>
        {!this.state.editMode?
        <div>
          <span onDoubleClick={ this.ClickForEditMode.bind(this) }>{this.props.status}</span>
        </div>
        :
        <div>
          <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.DiactivateClickForEditMode.bind(this)} type="text" value={this.state.status || '------'} />
        </div>
  }
      </div>
    );
  }
}

export default ProfileStatus;
