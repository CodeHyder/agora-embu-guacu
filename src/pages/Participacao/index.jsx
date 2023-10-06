import React from "react";
import "./participacao.css";

function Participacao() {
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <section className="section categorias">
      <form action="#">
        <div className="form__input">
          <label class="desc" id="categoryLabel" for="category">
            Categoria
          </label>
          <div>
            <select id="category" name="category" tabindex="2">
              <option value="saude">Saúde</option>
              <option value="seguranca">Segurança</option>
              <option value="moradia">Moradia</option>
              <option value="educacao">Educação</option>
              <option value="animais">Animais</option>
              <option value="estabelecimento">Estabelecimento</option>
              <option value="meioAmbiente">Meio Ambiente</option>
              <option value="mobilidade">Mobilidade</option>
              <option value="transparencia">Transparência</option>
              <option value="servicosPublicos">Serviços Públicos</option>
            </select>
          </div>
        </div>
        <div className="form__input">
          <label class="desc" id="title1" for="Field1">
            Bairro
          </label>
          <div>
            <input
              id="Field1"
              name="Field1"
              type="text"
              class="field text fn"
              value=""
              size="8"
              tabindex="1"
            />
          </div>
        </div>
        <div className="form__input">
          <label class="desc" id="title1" for="Field1">
            Rua
          </label>
          <div>
            <input
              id="Field1"
              name="Field1"
              type="text"
              class="field text fn"
              value=""
              size="8"
              tabindex="1"
            />
          </div>
        </div>
        <div className="form__input">
          <label class="desc" id="title1" for="Field1">
            Número, se houver
          </label>
          <div>
            <input
              id="Field1"
              name="Field1"
              type="text"
              class="field text fn"
              value=""
              size="8"
              tabindex="1"
            />
          </div>
        </div>
        <div className="form__input">
          <label class="desc" id="title1" for="Field1">
            Ponto de Referência
          </label>
          <div>
            <input
              id="Field1"
              name="Field1"
              type="text"
              class="field text fn"
              value=""
              size="8"
              tabindex="1"
            />
          </div>
        </div>
        <div className="form__input">
          <label class="desc" id="title4" for="Field4">
            Descrição
          </label>

          <div>
            <textarea
              id="Field4"
              name="Field4"
              spellcheck="true"
              rows="10"
              cols="50"
              tabindex="4"
            ></textarea>
          </div>
        </div>
        <div className="form__input">
          <label class="desc" for="imageUpload">
            Imagem:
          </label>
          <div>
            <input
              id="imageUpload"
              name="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              tabindex="8"
            />
          </div>
        </div>
        <div className="button__container">
          <a href="/" className="button backButton">
            Voltar
          </a>
          <a href="" className="button" type="submit">
            Enviar Participação
          </a>
        </div>
      </form>
    </section>
  );
}

export default Participacao;
