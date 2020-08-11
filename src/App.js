import React from 'react';
import './App.css';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from "date-fns/locale/es";
registerLocale("es",es);
class App extends React.Component {
  state = {
    fecha: new Date("2020","08","11")
  }

  onChange= fecha => {
    this.setState({fecha: fecha});
  }

  mostrarFecha = fecha => {
    const options = {weekday:'long', year: 'numeric', month:'long', day:'numeric'};
    alert(fecha.toLocaleDateString('es-ES', options))
  }

  render ()
  {
    return (
      <>
        <div className="contenedor">
          <div className="center">
            <DatePicker selected={this.state.fecha} onChange={this.onChange} locale="es" dateFormat="dd-MMMM-yyyy"/>
            <br></br>
            <input type="button" value="Mostrar Fecha" className="btn btn-primary" onClick={()=>this.mostrarFecha(this.state.fecha)} />
          </div>
        </div>
      </>
    );
  }
  
}

export default App;
