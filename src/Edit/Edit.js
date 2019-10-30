import React from 'react';
import './Edit.css';
import axios from 'axios'

const initialState = {
    name: '',
    phone_number: '',
    name_error:'',
    number_error:'',
}

export class Edit extends React.Component{

    constructor(props){
        super(props)
        this.state = initialState;
    }

    async componentDidMount() {
        const {id} = this.props.match.params;

        const res = await axios.get(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`);

        const book = res.data;

        this.setState({
            name: book.name,
            phone_number:book.phone_number
        });
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    validate = () => {
        let name_error='';
        let number_error='';


        if (!this.state.name){

            name_error="Name field is required !";
        }
        if (!this.state.phone_number){

            number_error="Phone Number field is required !";
        }

        if (name_error || number_error) {
            this.setState({name_error, number_error});
            return false;
        }
        return true;
    }

    submitHandler = e =>{
        const {id} = this.props.match.params;
        e.preventDefault();

        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            axios.put(`https://code-catalist-phone-book-rails.herokuapp.com/contacts/${id}`,this.state)
            .then(response =>{
                console.log(response)
            })
            this.setState(initialState);
        }
    }

    _refreshPhoneBook() {

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
                    <i class="fas fa-arrow-left"></i>
                    <div className="add">
                        <div className="camerana">
                            <i className="fas fa-camera fa-5x icons"></i>
                        </div>
                        <div className="add-form">
                            <form  onSubmit={this.submitHandler}>
                                <label htmlFor="name">Name</label><br/>
                                <div>
                                    <input type="text" id="name" name ="name" value={ this.state.name } onChange={this.changeHandler} /><br/>
                                    <div style={{ color:'red'}}>{this.state.name_error}</div>
                                </div>

                                <label htmlFor="surname">Surname</label><br/>
                                <div>
                                <input type="text" name="surname"/>
                                </div>

                                <br/><br/><br/>
                                <label htmlFor="phoneNumber" className="label">Mobile</label><br/>
                                <div>
                                    <input type="text" id="phone_number" name ="phone_number" className="placeholder" value={ this.state.phone_number } onChange={this.changeHandler} />
                                    <div style={{ color:'red'}}>{this.state.number_error}</div>
                                </div>

                                <button type="submit" className="btn" value="Create PhoneBook">
                                    <i className="fas fa-plus"></i>
                                    Edit Phone Number
                                </button>
                            </form>
                        </div>
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
























