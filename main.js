import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
import Teams from './teams';
import AddTeam from './add-team';
import Articles from './articles';
import './main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: [],
            hide: true,
        };
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    editTeams(hide){
        this.setState({
            hide
        })
    }

    addTeam(team) {
        this.setState({
            teams: [...this.state.teams, {team}]
        });
        console.log('Teams',team)
         fetch('http://localhost:8080/teams',{
            method: "POST",
            body: JSON.stringify({
                team: team,
                user: "james"
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            if (!res.ok) { return Promise.reject(res.statusText); }
            return res.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    }




    updateTeam(team) {
        this.setState({
            teams: [...this.state.teams, {team}]
        });
        console.log('Teams',team)
         fetch('http://localhost:8080/teams/'+this.state.id,{
            method: "PUT",
            body: JSON.stringify({
                team: team,
                id: this.state.id
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            if (!res.ok) { return Promise.reject(res.statusText); }
            return res.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
    }


    deleteTeam(team) {
        this.setState({
            teams: [...this.state.teams, {team}]
        });
//        console.log('Teams',team)
//         fetch('http://localhost:8080/teams/james',{
//            method: "DELETE",
//            // body: JSON.stringify({
//            //     team: team,
//            //     user: "james"
//            // }),
//            headers: {
//              "Content-type": "application/json; charset=UTF-8"
//            }
//        })
//        .then(res => {
//            if (!res.ok) { return Promise.reject(res.statusText); }
//            return res.json()
//        })
//        .then(data => {
//            console.log(data);
//        })
//        .catch(error => {
//            console.log(error);
//        });
    }

   

    getNews(teamsForNewsString){
        var url = 'https://newsapi.org/v2/everything?' +
        `q="${teamsForNewsString}"&` +
        'from=2018-12-05&' +
        'languege=eg&' +
        'apiKey=508b1fda120441e68b78ef8483883676';

        var req = new Request(url);

        fetch(req)
        .then(function(res) {
            return res.json()
        }).then(data => this.setState({
            articles: data.articles
        })
        )

    }

    componentDidMount(){
        
        fetch('http://localhost:8080/teams')
        .then(res => {
            if (!res.ok) { return Promise.reject(res.statusText); }
            return res.json()
        })
        .then(data => {
            this.setState({
                teams: data.teams,
                id: data.teams[0].id
            })
            console.log(data);
            let teams = data.teams[0].team.toString();
             let teamsForNewsString = teams.replace(/,/g, '" OR "');
            
            console.log(teamsForNewsString);
            this.getNews(teamsForNewsString);
        })
        .catch(error => {
            console.log(error);
        })
        ;
    }
    


    


    render() {
        const teams = this.state.teams.map((team, index) => (
                <Teams {...team} onDelete={team => this.deleteTeam(team)}  />));

        return (
            <div className="teamList">
                <Header />
                    <div id = "mainContent">         
                        <ul className="lists">
                            <li className="addTeams">
                                <AddTeam
                                    onAdd={team => this.addTeam(team)}
                                    onUpdate={team => this.updateTeam(team)}
                                    savedTeams={this.state.teams[0]}
                                    onEdit={hide => this.editTeams(hide)}
                                />

                            </li>
                        {this.state.hide &&
                            <>
                                {teams}
                            </>
                        }
                        </ul>
                        {this.state.hide &&
                        <Articles />
                        }
                    </div>
            </div>
        );
    }
}