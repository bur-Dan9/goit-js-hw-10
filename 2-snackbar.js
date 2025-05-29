import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as t}from"./assets/vendor-BbbuE1sJ.js";const i=document.createElement("style");i.textContent=`
  .form {
    line-height: 1.5;
    color:rgb(45, 47, 71);
    margin-top: 32px;
    width: 360px;
    font-family: Arial, sans-serif;
  }

  .form-label {
    display: block;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: -8px;
  }

  .form-input {
    display: block;
    width: 100%;
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #666;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 16px;
  }

  .form-input:focus {
    outline: none;
    border: 1px solid #000;
  }

  .form-fieldset {
    border: 2px solid #666;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .form-fieldset legend {
    padding: 0 6px;
    font-size: 16px;
    font-weight: 500;
  }

  .form-fieldset label {
    display: inline-flex;
    align-items: center;
    margin-right: 24px;
    font-size: 20px;
    cursor: pointer;
  }

  .form-fieldset input[type="radio"] {
    margin-right: 8px;
    margin-bottom: 3px;
  }

  .form-btn {
    width: 100%;
    min-height: 40px;
    background-color: #e0e0e0;
    color: #000;
    border: 1px solid #333;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form-btn:hover {
    background-color: #d5d5d5;
  }
`;document.head.appendChild(i);document.querySelector(".form").addEventListener("submit",function(r){r.preventDefault();const o=Number(this.elements.delay.value),n=this.elements.state.value;new Promise((e,s)=>{setTimeout(()=>{n==="fulfilled"?e(o):s(o)},o)}).then(e=>{t.success({title:"✅ Success",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{t.error({title:"❌ Error",message:`Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
