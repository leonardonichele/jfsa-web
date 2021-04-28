import * as React from 'react';
import heroImg from '../images/hero.png';
import linkedinImg from '../images/linkedin.png';
import facebookImg from '../images/facebook.png';
import workOne from '../images/workone.jpg';
import workTwo from '../images/worktwo.jpg';
import flowslabsImg from '../images/flowslabs.png';
import cloudImg from '../images/cloud.png';
import protheusImg from '../images/protheus.png';
import dbImg from '../images/db.png';
import dataImg from '../images/data.png';
import '../styles/landing.css';

function Landing() {
    return (
        <div className="content">
            <header>
                <div className="topnav">
                    <p><b>Juan</b> Amarante</p>
                </div>
            </header>
            <main>
                <div className="hero">
                    <img src={heroImg} alt="byjuanamarante"/>
                    <br/>
                </div>
                <div className="about">
                    <h1>um pouco sobre<br></br>quem é o Juan Felipe Silva do Amarante.</h1>
                    <br/>
                    <p>Estudante de Ciências da Computação, coordenador de equipe, desenvolvedor PowerBI/MSSQL e analista de Protheus.</p>
                    <p>- Conhecimento do setor a mais de 8 anos.</p>
                    <br/>
                    <a href="https://teste.com"><img src={linkedinImg} alt="linkedin"/></a>
                    <a href="https://teste.com"><img src={facebookImg} alt="linkedin"/></a>
                </div>
                <hr/>
                <div className="work">
                    <h1>Algumas realizações</h1>
                    <img src={workOne} alt="workone"/>
                    <img src={workTwo} alt="worktwo"/>
                </div>
                <div className="knowledge">
                    <h1>Conhecimentos</h1>
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={dbImg} alt="database"/>
                                <h3>Banco de dados</h3>
                                <p>Atuação como desenvolvedor de banco de dados<br></br><br></br><br/>Microsoft SQL</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={cloudImg} alt="cloud"/>
                                <h3>Computação em nuvem</h3>
                                <p>Utilização de estrutura em nuvem da AZURE.<br></br>(Datafactory + Blob + Storage)</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={protheusImg} alt="totvs"/>
                                <h3>TOTVS Protheus</h3>
                                <p>Módulos:<br></br>Pcp, estoque, custos, gestão de contratos, faturamento e compras.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={dataImg} alt="data"/>
                                <h3>Análise de dados</h3>
                                <p>Via PowerBI, desenvolvendo sobre visualizações em finanças, materiais e custos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="contact">
                    <h1>Contate-me</h1>
                    <p>Caso tenha interesse em estabelecer contato, clique abaixo.</p>
                    <br/>
                    <br/>
                    <a href="mailto:juanamarant@outlook.com">Enviar mensagem</a>
                </div>
            </main>
            <footer>
                <div className="flowslabs">
                    <img src={flowslabsImg} alt="flowslabs"/>
                </div>
            </footer>
        </div>
    );
}

export default Landing;