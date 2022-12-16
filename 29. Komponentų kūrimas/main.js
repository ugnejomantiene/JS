
//              KOMPONENTAI

//      UL/OL 
{
class List{
    constructor(props){
    this.props = props;
    return this.render();
    }
  
    render = () => {
        this.htmlElement = document.createElement(this.props.type);
  
        Object.keys(this.props.attributes).forEach(attribute => {
          this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
        });
  
        this.props.listItems.forEach(listItem => {
          this.li = document.createElement('li');
          this.liTextNode = document.createTextNode(listItem.text);
          this.li.append(this.liTextNode);
          Object.keys(listItem.attributes).forEach(attribute => {
            this.li.setAttribute(attribute, listItem.attributes[attribute]);
          });
          this.htmlElement.append(this.li);
        });
  
        return this.htmlElement;
    }
    }
    let list = new List({
      type: 'ul',
      attributes: {
        class: 'lightThemeList',
        id: 'superUnorderedList'
      },
      listItems: [
        {
          text: 'list item tekstas1',
          attributes: {
            class: 'listItem',
            style: 'color: grey'
        }
        },{
          text: 'list item tekstas2',
          attributes: {
            class: 'listItem',
            style: 'color: green'
          }
        },{
          text: 'list item tekstas3',
          attributes: {
            class: 'listItem',
            style: 'color: red'
          }
        }
      ]
    });
  
document.querySelector("body").append(list);
}



  
  //      SELECT

//2 Sukurti klasę, kurios pagalba galima būtų kurti SELECT elementą, kurio viduje būtų OPTION elementai. su galimybe suteikti atributus ir tekstą.

class Select {
    constructor(props) {
      this.props = props;
      return this.render();
    }
    render() {
      this.htmlElement = document.createElement('select');
      Object.keys(this.props.attributes).forEach(attributes => {
        this.htmlElement.setAttribute(attributes, this.props.attributes[attributes]);
      });
      this.props.options.forEach(option => {
        this.option = document.createElement('option');
        this.optionTextNode = document.createTextNode(option.text);
        this.option.append(this.optionTextNode);
        Object.keys(option.attributes).forEach(attributes => {
          this.option.setAttribute(attributes, option.attributes[attributes]);
        });
        this.htmlElement.append(this.option);
      });
      return this.htmlElement;
    }
  }
  let select = new Select({
    attributes: {
      class: 'select',
      id: 'select',
      style: 'color: purple',
    },
    options: [
      {
        text: 'Vienas',
        attributes: {
          class: 'option',
          style: 'color: red',
          value: '1'
        }
      }, {
        text: 'Du',
        attributes: {
          class: 'option',
          style: 'color: green',
          value: '2'
        }
      }, {
        text: 'Trys',
        attributes: {
          class: 'option',
          style: 'color: blue',
          value: '3'
        }
      }, {
        text: 'Keturi',
        attributes: {
          class: 'option',
          style: 'color: purple',
          value: '4'
        }
      }
    ]
  });
  document.querySelector('body').append(select);

// 3) Sukurti Klasę, kurios pagalba galima būtų kurti TABLE elementą, kurio viduje būtų THEAD ir TBODY (gal ir TFOOT jei nori). THEAD viduje būtų TR, kurio viduje TH. TBODY viduje būtų TR, kurių viduje būtų TD. (jeigu darot su TFOOT, tai ten irgi bus TR su TD kaip buvo TBODY).  (kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)

class Table {

    constructor(props) {
      this.props = props;
      return this.render();
    }
    render() {
      this.htmlElement = document.createElement(this.props.type);
      Object.keys(this.props.attributes).forEach(attributes => {
        this.htmlElement.setAttribute(attributes, this.props.attributes[attributes]);
      });
      this.thead = document.createElement('thead');
      this.tr = document.createElement('tr');
      Object.keys(this.props.thead).forEach(th => {
        this.th = document.createElement('th');
        this.thTextNode = document.createTextNode(this.props.thead[th]);
        this.th.append(this.thTextNode);
        this.tr.append(this.th);
      });
      this.thead.append(this.tr);
      this.htmlElement.append(this.thead);
      this.tbody = document.createElement('tbody');
      this.props.tbody.forEach(tr => {
        this.tr = document.createElement('tr');
        Object.keys(tr).forEach(td => {
          this.td = document.createElement('td');
          this.tdTextNode = document.createTextNode(tr[td]);
          this.td.append(this.tdTextNode);
          this.tr.append(this.td);
        });
        this.tbody.append(this.tr);
      });
      this.htmlElement.append(this.tbody);
      return this.htmlElement;
    }
  }
  
  let table = new Table({
    type: 'table',
    attributes: {
      class: 'table',
      id: 'table',
      style: 'color: green'
    },
    thead: {
      th1: 'Vardas',
      th2: 'Pavarde',
      th3: 'Amžius',
      th4: 'Ar mokate JS?'
    },
    tbody: [
      {
        td1: 'Ungė',
        td2: 'Jomantienė',
        td3: '24',
        td4: 'Deportuokit mane iš čia, prašau...'
      }, {
        td1: 'Petras',
        td2: 'Petraitis',
        td3: '44',
        td4: 'Ne'
      }, {
        td1: 'Ala',
        td2: 'Alionuška',
        td3: '35',
        td4: 'Taip'
      }
    ]
  });
  document.querySelector('body').append(table);


// MODULIAI

// Kitų JS failų importavimas ir naudojimas

// import ką ir 'iš kur'; - faile, kuriame norime naudoti import
  
  //              MODULIAI
/*
  Kitų JS failų importavimas ir naudojimas
    import ka from 'isKur'; - faile kuriame norime naudoti importus (main.js)
    type="module" - nusirodyti atributą "type" su nustatymu "module" JS failo prijungime HTML'e.
    export default something(){}; 'isKur' faile reikia nurodyti ką jis eksportuoja.
  Galima rašyti tiek export default, tiek export;
    export default - numatytasis eksportas, kurį priimsi rašydamas - import anyNameIWant from 'exportFile.js'. Vardas, kurį nurodai neprivalo sutapti su export default vardu esančiu exportFile.js. Visviena bus eksportuojamas vienas vienintelis elementas, kuris turi default prierašą.
    export - paprastas eksporas, kurį'iuos priimsi rašydamas - import { exportedName, exportedName2 } from 'exportFile.js'. Priimsi būtent tuos elementus, kurių vardus parašei ir kurie yra paprasti export'ai. Priimti paprastus eksportus galima kokiais tik nori pavadinimais naudojant "as" prierašą: import { exportedName as pirmas, exportedName2 as antras } from 'exportFile.js'.
*/
