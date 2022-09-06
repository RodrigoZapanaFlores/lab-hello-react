
 
function BtnIcon({mode}) {
return (

      <div>
        <button className={`btn btn-${mode}`}>Awesome!</button>
      </div>

);

}

BtnIcon.defaultProp = {
  mode: 'primary'
}

export default BtnIcon;