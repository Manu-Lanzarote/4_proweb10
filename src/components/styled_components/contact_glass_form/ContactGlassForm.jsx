import './ContactGlassCss.css'

const ContactGlassForm = () => {
    return (
            <section className='c_section' id='contact'>
                <div className='f_box'>
                    <div className="f_square"></div>
                    <div className="f_square"></div>
                    <div className="f_square"></div>
                    <div className="f_square"></div>
                    <div className="f_square"></div>
                    <div className="f_square"></div>
                
                <div className="c_container">
                    <h2>¿Hablamos de tu Web?</h2>
                    <div className="c_row100">
                        <div className="c_col">
                            <div className="c_inputBox">
                                <input type='text' name='' required='required'/>
                                <span className='c_text'>First Name</span>
                                <span className='c_line'></span>
                            </div>
                        </div>
                        <div className="c_col">
                            <div className="c_inputBox">
                                <input type='text' name='' required='required'/>
                                <span className='c_text'>Last Name</span>
                                <span className='c_line'></span>
                            </div>
                        </div>
                    </div>
                    <div className="c_row100">
                        <div className="c_col">
                            <div className="c_inputBox">
                                <input type='text' name='' required='required'/>
                                <span className='c_text'>Email</span>
                                <span className='c_line'></span>
                            </div>
                        </div>
                        <div className="c_col">
                            <div className="c_inputBox">
                                <input type='text' name='' required='required'/>
                                <span className='c_text'>Mobile</span>
                                <span className='c_line'></span>
                            </div>
                        </div>
                    </div>
                    <div className="c_row100">
                        <div className="c_col">
                            <div className="c_inputBox c_textarea">
                                <textarea required='required'></textarea>
                                <span className='c_text'>Type your message here...</span>
                                <span className='c_line'></span>
                            </div>
                        </div>
                    </div>
                    <div className="c_row100">
                        <div className="c_col">
                            <input type='submit' value='Enviar'/>
                        </div>
                    </div>
                </div>
                </div>
            </section>
    )
}

export default ContactGlassForm
