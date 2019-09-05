import React from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom'; //do blokady przed opuszczeniem strony, gdy formularz jest niewysłany a wypełniony


class ContactPage extends React.Component {
    state = {
        value: "",
        isEmpty: true,
    }

    handleSubmit = (e) => {
        e.preventDefault(); //zapobiega przeładowaniu strony
        this.setState({
            value: "",
            isEmpty: true
        }) //czyszczenie formularza
    }

    handleChange = (e) => {
        if(e.target.value.length > 0) {
        this.setState({
            value: e.target.value,
            isEmpty: false
        })
    } else {
    this.setState({
        value: e.target.value,
        isEmpty: true
    })
}
    }
    render() {
    return ( 
        <div className="contact">
           <form onSubmit={this.handleSubmit}>
               <h3>Napisz do nas</h3>
               <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość"></textarea>
               <button >Wyślij</button>
           </form>
           <Prompt 
            when={!this.state.isEmpty} //warunek jest spełniony, gdy w formularzu jest coś napisane
            message="Masz niewypełniony formularz. Czy na pewno chcesz opuścic stronę?"
           />
        </div>
     );
    }
}
 
export default ContactPage;