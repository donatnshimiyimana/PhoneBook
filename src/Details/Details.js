import React from 'react';
import './Details.css';
import axios from 'axios'
import images from '../images/images.jpg';

export class Details extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: '',
            pnone_number: '',
        }
    }

    async componentDidMount() {
        const {id} = this.props.match.params;

        const res = await axios.get(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`);

        const contact = res.data;

        this.setState({
            name: contact.name,
            phone_number:contact.phone_number
        });
    }


    render(){

        return(
            <div>
                {/* Navigation Part */}
                <nav>
                    <div className="Part-one">
                    <span className="fa-stack fa-3x">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-phone-alt fa-stack-1x fa-inverse"></i>
                    </span>
                    </div>
                    <div className="Part-two">
                    <span className="fa-stack fa-3x">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                    </span>
                    Admin Admin <i className="fa fa-angle-down" style={{color: '#3498db'}}></i>
                    </div>
                </nav>
                {/* End Navigation Part */}

                {/* Add New Phone Book Part */}
                <div>
                    <div className="detail">
                        <div className="images">
                            <i class="fas fa-arrow-left"></i> <br/>
                            <img src={images} alt="images" />
                        </div>
                        <div className="detail-icon">
                            <h1>{this.state.name}</h1> <br/>
                            <div>
                                <ul>
                                    <li><i className="fas fa-comment-alt fa-lg"></i></li>
                                    <li><i className="fas fa-phone-alt fa-lg"></i></li>
                                    <li><i className="fas fa-video fa-lg"></i></li>
                                    <li><i className="fas fa-envelope fa-lg"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <ul>
                            <li>
                                <i className="fas fa-phone-alt fa-lg"></i>
                                {this.state.phone_number} <br/>
                                <small className="small">Mobile</small></li>
                            <li>
                                <i className="fas fa-home fa-lg"></i>
                                026 67308820 <br/>
                                <small className="small">Home</small>
                                </li>
                            <li>
                                <i className="fas fa-envelope fa-lg"></i>
                                AvaDoi_16@gmail.com <br/>
                                <small className="small">Email</small>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Part */}
                <footer>
                    <p>&copy;All Right Are  Reserved</p>
                </footer>
                {/* End Footer Part */}
            </div>

        )
    }
}
























