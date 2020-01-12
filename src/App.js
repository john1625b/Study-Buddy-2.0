import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Study Buddy',
            course: '',
            courseLocation: '',
            table: [{course:'calc1', loc:'MC room 101'},{course:'physics 101', loc:'DC room 202'}, {course:'computer science', loc:'MC cafe'}]
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCourse = this.handleCourse.bind(this);
        this.handleCourseLocation = this.handleCourseLocation.bind(this)
    }

    handleCourse(event) {
        event.preventDefault();
        this.setState({course: event.target.value})
    }

    handleCourseLocation(event) {
        event.preventDefault();
        this.setState({courseLocation: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = this.state;
        console.log(data)
    }

    tableRow = (course, location) => {
        return (
            <tr>
                <td>{course}</td>
                <td>{location}</td>
            </tr>)
    };

    render () {
        // const names = ['Jake', 'Jon', 'Thruster'];
        return (
            <div className="App">
                <h1>
                    {this.state.title}
                </h1>
                {this.state.table.map(row => this.tableRow(row.course, row.loc))}
                {/*{names.map(name => <h1>name</h1>)}*/}
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>course</th>
                                <th>location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>calc 2</td>
                                <td>MC room 101</td>
                            </tr>
                            <tr>
                                <td>cs 114</td>
                                <td>DC room 202</td>
                            </tr>
                            <tr>
                                <td>physics 101</td>
                                <td>PHYs room 303</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="formContainer">

                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        Add meetup
                        <br/>
                        <label>
                            Course:
                            <input type="text" name="course" value={this.state.course} onChange={this.handleCourse}/>
                        </label>
                        <label>
                            Location:
                            <input type="text" name="courseLocation" value={this.state.courseLocation} onChange={this.handleCourseLocation}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                    <div>
                        submitted: {this.state.course} and {this.state.courseLocation}
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
