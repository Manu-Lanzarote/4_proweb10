import './GlassButtonCss.css'

const GlassButton = (props) => {
    return (
                <div className="gb_container">
                    <div className="gb_btn">
                        <a href='https://google.com'>{props.titulo}</a>
                    </div>
                </div>
    )
}

export default GlassButton;
