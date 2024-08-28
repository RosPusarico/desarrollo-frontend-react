
import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <div className="header-content">
                    <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
                </div>
            </header>

            <section className="titulo">
                <h3><b>Bienvenido</b></h3>
            </section>

            <section>
                <p>Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>, el manejo de <b>hooks</b>, y el uso de <b>Redux</b>.</p>
            </section>

            <section className="titulo">
                <h3><b>Temas Cubiertos</b></h3>
            </section>

            <section className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Componentes funcionales y de clase</th>
                            <th>Uso de <b>React hooks</b> como useState y useEffect</th>
                            <th>Creación de <b>custom hooks</b> como useForm</th>
                            <th>Gestión de variables de estado con <b>useState</b></th>
                            <th>Gestión de estado global con <b>Redux</b></th>
                            <th>Integración de <b>Redux</b> con <b>React</b></th>
                            <th>Manejo de <b>Formularios</b> en <b>React</b></th>
                            <th>Publicando nuestra <b>página</b> con <b>GitHub Pages</b></th>
                        </tr>
                    </thead>
                    <tbody>
                     
                    </tbody>
                </table>
            </section>

            <section className="titulo">
                <h3><b>Recursos Adicionales</b></h3>
            </section>

            <section>
                <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
            </section>

            <section>
                <p>2024 Modulo 7. USIP</p>
            </section>
        </div>
    );
};

export default LandingPage;
