import React from 'react';
import '../styles/landing.css';
import logoDataScience from '../images/science.png';
import LinkedIn from '../images/linkedin.png';

function Landing() {
    return (
        <div id="homepage">
            <div id="start">
                <img src={logoDataScience} alt="FlowsLabs" />
                <br></br>
                <h1>Juan Felipe Silva do Amarante</h1>
                <div className="about">
                    <h3>Gerente de projetos
                    <br></br>
                    Coordenador de equipe de analistas
                    <br></br>
                    Analista de dados
                    <br></br>
                    Desenvolvedor POWER BI</h3>
                    <br></br>
                </div>
                <a href="mailto:juanamarant@outlook.com">Contate-me</a>
                <br></br>
                <p>Saiba mais sobre mim</p>
                <p>&darr;</p>
            </div>
            <div id="mid">
                <h1>Prazer em conhecer, aqui está um pouco sobre mim...</h1>
                <div id="box">
                    <section id="info">
                        <div className="card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin et nisl sed eleifend. Pellentesque ac ultricies sapien. Mauris maximus tempus auctor. Integer turpis nibh, pellentesque eu velit vitae, feugiat lacinia velit. Nullam sed turpis ut turpis feugiat commodo. Integer et posuere turpis, in porta diam. Morbi eget suscipit nibh, scelerisque volutpat purus. Curabitur tristique ligula eget consectetur tincidunt. Integer et condimentum tellus. Suspendisse non laoreet dui. Maecenas sit amet sagittis odio, sit amet viverra velit. </p>
                        </div>
                        <div className="card">
                            <h1>Gerente de Projetos</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin et nisl sed eleifend. Pellentesque ac ultricies sapien. Mauris maximus tempus auctor. Integer turpis nibh, pellentesque eu velit vitae, feugiat lacinia velit. Nullam sed turpis ut turpis feugiat commodo. Integer et posuere turpis, in porta diam. Morbi eget suscipit nibh, scelerisque volutpat purus. Curabitur tristique ligula eget consectetur tincidunt. Integer et condimentum tellus. Suspendisse non laoreet dui. Maecenas sit amet sagittis odio, sit amet viverra velit. </p>
                        </div>
                        <div className="card">
                            <h1>Coordenador de Equipe de Analistas</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin et nisl sed eleifend. Pellentesque ac ultricies sapien. Mauris maximus tempus auctor. Integer turpis nibh, pellentesque eu velit vitae, feugiat lacinia velit. Nullam sed turpis ut turpis feugiat commodo. Integer et posuere turpis, in porta diam. Morbi eget suscipit nibh, scelerisque volutpat purus. Curabitur tristique ligula eget consectetur tincidunt. Integer et condimentum tellus. Suspendisse non laoreet dui. Maecenas sit amet sagittis odio, sit amet viverra velit. </p>
                        </div>
                        <div className="card">
                            <h1>Analista de Dados</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin et nisl sed eleifend. Pellentesque ac ultricies sapien. Mauris maximus tempus auctor. Integer turpis nibh, pellentesque eu velit vitae, feugiat lacinia velit. Nullam sed turpis ut turpis feugiat commodo. Integer et posuere turpis, in porta diam. Morbi eget suscipit nibh, scelerisque volutpat purus. Curabitur tristique ligula eget consectetur tincidunt. Integer et condimentum tellus. Suspendisse non laoreet dui. Maecenas sit amet sagittis odio, sit amet viverra velit. </p>
                        </div>
                        <div className="card">
                            <h1>Desenvolvedor Power BI</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin et nisl sed eleifend. Pellentesque ac ultricies sapien. Mauris maximus tempus auctor. Integer turpis nibh, pellentesque eu velit vitae, feugiat lacinia velit. Nullam sed turpis ut turpis feugiat commodo. Integer et posuere turpis, in porta diam. Morbi eget suscipit nibh, scelerisque volutpat purus. Curabitur tristique ligula eget consectetur tincidunt. Integer et condimentum tellus. Suspendisse non laoreet dui. Maecenas sit amet sagittis odio, sit amet viverra velit. </p>
                        </div>
                    </section>
                </div>
            </div>
            <div id="end">
                <section id="content">
                    <div className="about-card">
                        <div className="btn-contact">
                            <h1>Conexão</h1>
                            <br></br>
                            <a href="mailto:juanamarant@outlook.com">Contate-me</a>
                        </div>
                    </div>
                    <div className="about-card">
                        <h1>Redes Sociais</h1>
                        <br></br>
                        <a href="https://www.linkedin.com/in/leonardonichele/"><img src={LinkedIn} alt="linkedin"></img></a>
                    </div>
                </section>
                <br></br>
            </div>
            <div id="markdown">
                <h1>Desenvolvido por Leonardo Nichele - FlowsLabs © 2021 - v1.0</h1>
            </div>
        </div>
    );
}

export default Landing;