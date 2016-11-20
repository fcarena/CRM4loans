
class MenuBox extends React.Component {
  constructor() {
     super();
      this.state={data:[]};
  }

  componentDidMount() {
    $.ajax({
      url: "/api/v1/menu/getall",
      type: 'POST',
      dataType: 'json',
      success: function(data,textStatus, xhr) {
        this.setState({data:data});
    //    $("#menu").append(data.Items[0].Name)
      }.bind(this),
      beforeSend: function(xhr) {
         xhr.setRequestHeader('Authorization','Bearer ' + t);
      }.bind(this),
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">CRM4Loans</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            
              <Menu data={this.state.data.Items} />
           
            
          </div>
        </div>
      </nav>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav">
        {this.props.data && this.props.data.map(function(m,i){
          return  <li key={i} className="dropdown">
                    <a href={m.Link} className="dropdown-toggle" data-toggle="dropdown" role="button"> {m.Name}</a>
                    <ul className="dropdown-menu">
                      {m.Items && m.Items.map(function(mm,ii){
                        return  <li>
                                  <a href={mm.Link}> {mm.Name}</a> 
                                </li>
                        })
                      }
                    </ul> 
                  </li>;
          })
        }
       </ul>
      
    );
  }
}


ReactDOM.render(
  <MenuBox />,
  document.getElementById('menu')
);
