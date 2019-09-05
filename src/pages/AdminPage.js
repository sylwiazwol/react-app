import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = false; //jeśli jest true to będzie przekierowanie do strony /login, a jeśli będzie false, to przekieruje do strony /admin

const AdminPage = () => {
    return (
       <Route render={() => (
           permission ? (<h3>Panel admina - jesteś zalogowany</h3>) : (
               <Redirect to="/login"/>
           )
       )}/>
    );
}

export default AdminPage;