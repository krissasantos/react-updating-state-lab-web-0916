const React = require('react');

class YoutubeDebugger extends React.Component {
  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.handlClick = this.handlClick.bind(this);
    this.handlClickResolution = this.handlClickResolution.bind(this);

  }

  handlClick(){
    // this.setState({   
    //   settings: Object.assign({}, this.state.settings, {bitrate: 12})
    // })
      this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handlClickResolution(){

    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handlClick}>Change bitrate</button>
        <button className="resolution" onClick={this.handlClickResolution}>Change resolution</button>
      </div>
    );
  }
}




module.exports = YoutubeDebugger;