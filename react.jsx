class ColorChecker extends React.Component{
   constructor(props, context){
    super(props, context)

            this.state= {
                bgColor: "#887766"
            }

            this.colorValue = this.colorValue.bind(this)
            this.setNewColor = this.setNewColor.bind(this)
        }

        colorValue(e){
                        this.setState({
                            color: e.target.value
                        })
                    }

         setNewColor(e) {
        this.setState({
          bgColor: this.state.color
        });
    
        this._input.focus()
        this._input.value=""
        e.preventDefault();
      }
 

        render() {
            var squareStyle = {
                        backgroundColor: this.state.bgColor
                }

            return (
                <div className="colorArea">
                  <div style={squareStyle} className="colorCircle"></div>

                  <form onSubmit={this.setNewColor}>
                      <input onChange={this.colorValue}
                              ref={
                                  (el) => this._input = el
                              }
                          placeholder="Enter a color value"></input>
                      <button type="submit">Go</button>
                  </form>

                  <div className="instructions">
                  <h3>Examples:</h3>
                  <p>Hex Colour = <strong>#ffff00</strong></p>
                  <p>Colour Name = <strong>red</strong></p>
                  <p>RGBA = <strong>rgba(1,255,100,.5)</strong></p>
                  </div>  

                  <ColorLabel color={this.state.bgColor} />
              </div>
                    )
        }
    }

    class ColorLabel extends React.Component{
        render() {
            return ReactDOM.createPortal(
                " " + this.props.color,
                document.querySelector("#masthead")
            )
        }
    }

    ReactDOM.render(
        <div>
            <ColorChecker />
        </div>,
        document.querySelector("#container")
    )
