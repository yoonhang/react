import React from "react";

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} img={this.props.img}/>
                <CustomerInfo name={this.props.name} birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <img src={this.props.img} alt="img"></img>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;
