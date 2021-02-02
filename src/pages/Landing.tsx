import React from 'react';
import '../styles/landing.css';
import logoDataScience from '../images/science.png';
import LinkedIn from '../images/linkedin.png';
import sql from '../images/sql.png';
import powerbi from '../images/powerbi.png';
import protheus from '../images/protheus.png';
import azure from '../images/azure.png';

function Landing() {
    return (
        <div id="homepage">
            <div id="start">
                <img src={logoDataScience} alt="FlowsLabs" />
                <br></br>
                <h1>Juan Felipe Silva do Amarante</h1>
                <div className="about">
                    <h3>Tecnólogo em Ciências de Dados
                    <br></br>
                    Analista Protheus
                    <br></br>
                    Desenvolvedor SQL
                    <br></br>
                    Desenvolvedor Power BI</h3>
                    <br></br>
                </div>
                <a href="mailto:juanamarant@outlook.com">Contate-me</a>
                <br></br>
                <p>Saiba mais sobre mim</p>
                <p>&darr;</p>
            </div>
            <div id="mid">
                <h1>Prazer em conhecer, aqui está um pouco sobre mim...</h1>
                <br></br>
                <div id="box">
                    <section id="info">
                        <div className="card">
                            <h1>Juan Amarante</h1>
                            <br></br>
                            <p>Especialista em pesquisa analítica na área de materiais e financeiro.<br></br>Atuando a 8 anos no sitema PROTHEUS e 3 anos no Power BI. </p>
                        </div>
                        <div className="card">
                            <h1>Protheus</h1>
                            <br></br>
                            <p>Módulos; PCP, ESTOQUE CUSTOS, GESTÃO DE CONTRATOS, FATURAMENTO e COMPRAS.</p>
                        </div>
                        <div className="card">
                            <h1>SQL</h1>
                            <br></br>
                            <p>Desenvolvimento de Views e Procedures.</p>
                        </div>
                        <div className="card">
                            <h1>Power BI</h1>
                            <br></br>
                            <p>Desenvolvimento de BI's financeiros, materiais e custos.</p>
                        </div>
                    </section>
                </div>
            </div>
            <div className="tech">
                <div className="container">
                    <h2>Tecnologias</h2>
                    <section className="techlogo-slider">
                        <div className="slide"><img src={sql} alt="sql"></img></div>
                        <div className="slide"><img src={azure} alt="azure"></img></div>
                        <div className="slide"><img src={powerbi} alt=""></img></div>
                        <div className="slide"><img src={protheus} alt=""></img></div>
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