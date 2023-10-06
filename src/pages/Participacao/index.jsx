import React from "react";
import "./participacao.css";
// import animalIcon from "assets/animaisIcon.svg";
// import saudeIcon from "assets/saudeIcon.svg";
// import moradiaIcon from "assets/moradiaIcon.svg";
// import meioAmbienteIcon from "assets/meioAmbienteIcon.svg";
// import transparenciaIcon from "assets/transparenciaIcon.svg";
// import transporteIcon from "assets/transporteIcon.svg";
// import segurancaIcon from "assets/segurancaIcon.svg";
// import educacaoIcon from "assets/educacaoIcon.svg";
// import estabelecimentoIcon from "assets/estabelecimentosIcon.svg";
// import servicoPublicoIcon from "assets/servicoPublicoIcon.svg";

function Participacao() {
  return (
    <section className="section categorias">
      <form action="#">
        <div>
          <label class="desc" id="title1" for="Field1">
            Full Name
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

        <div>
          <label class="desc" id="title3" for="Field3">
            Email
          </label>
          <div>
            <input
              id="Field3"
              name="Field3"
              type="email"
              spellcheck="false"
              value=""
              maxlength="255"
              tabindex="3"
            />
          </div>
        </div>

        <div>
          <label class="desc" id="title4" for="Field4">
            Message
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

        <div>
          <fieldset>
            <legend id="title5" class="desc">
              Select a Choice
            </legend>

            <div>
              <input id="radioDefault_5" name="Field5" type="hidden" value="" />
              <div>
                <input
                  id="Field5_0"
                  name="Field5"
                  type="radio"
                  value="First Choice"
                  tabindex="5"
                  checked="checked"
                />
                <label class="choice" for="Field5_0">
                  First Choice
                </label>
              </div>
              <div>
                <input
                  id="Field5_1"
                  name="Field5"
                  type="radio"
                  value="Second Choice"
                  tabindex="6"
                />
                <label class="choice" for="Field5_1">
                  Second Choice
                </label>
              </div>
              <div>
                <input
                  id="Field5_2"
                  name="Field5"
                  type="radio"
                  value="Third Choice"
                  tabindex="7"
                />
                <label class="choice" for="Field5_2">
                  Third Choice
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <div>
          <input id="saveForm" name="saveForm" type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
}

export default Participacao;
