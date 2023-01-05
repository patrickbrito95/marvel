import React from "react";
import "./styles.css";
import MarvelLogoImg from "../../Assets/marvel-logo.png";
import Icon from "../../Components/Icon";

const Footer = () => {
  return (
    <div>
      <div className="wrapper-newsletter">
        <div className="red-box">
          <h1>RECEBA AS NOVIDADES DA MARVEL</h1>
        </div>
        <div className="newsletter">
          <div className="newsletter-title">
            <span>
              Cadastre-se para receber nossas notícias em primeira mão
            </span>
          </div>
          <div className="newsletter-input">
            <label>SEU MELHOR EMAIL</label>
            <div>
              <input placeholder="Informe seu melhor e-mail" />
              <button>ENVIAR</button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-footer">
        <div className="first-block">
          <div className="marvel-logo">
            <img width={50} height={67} src={MarvelLogoImg} alt="marvel logo" />
          </div>
          <div className="about-marvel">
            <span>A Marvel</span>
            <div className="footer-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.marvel.com/corporate/about"
              >
                Sobre a Marvel
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.marvel.com/help/category/17"
              >
                Ajuda
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.marvel.com/corporate/interns"
              >
                Carreiras
              </a>
            </div>
          </div>
          <div className="media-marvel">
            <span>Mídia</span>
            <div className="footer-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.marvel.com/movies"
              >
                Filmes
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.marvel.com/comics"
              >
                Quadrinhos
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.marvel.com/tv-shows"
              >
                Programas de TV
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.marvel.com/games"
              >
                Jogos
              </a>
            </div>
          </div>
        </div>
        <div className="second-block">
          <div className="last-news-blog">
            <span>Última do blog</span>
            <div className="headline-news">
              <img
                width={60}
                height={60}
                alt="Imagem Marvel Estúdios"
                src="https://pittnews.com/wp-content/uploads/2022/09/O_Marvel_LaMarca_AP-900x600.jpg"
              />
              <p>Vingadores confirma grande teoria dos fãs sobre a Marvel...</p>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://legadodamarvel.com.br/marvel-confirma-ameaca-muito-maior-que-thanos-em-vingadores-5/"
            >
              Continuar lendo
            </a>
          </div>
          <div className="follow-us">
            <span>Siga a Marvel</span>
            <div className="social-icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://pt-br.facebook.com/MarvelBR/"
              >
                <Icon name="facebook" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://open.spotify.com/user/marvel_music_"
              >
                <Icon name="spotify" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/marvelbrasil/?hl=pt-br"
              >
                <Icon name="instagram" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCItRs-h8YU1wRRfP637614w"
              >
                <Icon name="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
