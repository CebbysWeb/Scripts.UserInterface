const ButtonType = {
  NORMAL:     0,
  SPAMMABLE:  1,
  TOGGLEABLE: 2
}

class Button {
  constructor( button_x, button_y, button_width = 10,
  button_height = 10, button_type = 0 )
  {
    this.position = [ button_x, button_y ];
    this.dimensions = [ button_width, button_height ];
    this.buttonType = button_type
    this.clicked = false;
    this.released = true;
  }
  
  _buttonPressAction()
  {
    print( "Pressed" );
  }
  
  onPress()
  {
    switch( this.buttonType )
    {
      // Normal
      case ButtonType.NORMAL :
        if( !this.clicked )
        {
          this.clicked = true;
          this._buttonPressAction();
        }
        break;
      // Spammable
      case ButtonType.SPAMMABLE :
        if( !this.clicked )
        {
          this.clicked = true;
          this._buttonPressAction();
        }
        else
        {
          this.clicked = false
          this._buttonReleaseAction();
        }
        break;
      // Toggleable
      case ButtonType.TOGGLEABLE :
        if( this.released ) 
        {
          this.released = false;
          this.clicked = !this.clicked;
          if( this.clicked ) this._buttonPressAction();
          else this._buttonReleaseAction();
        }
        break;
    }
  }
  
  _buttonReleaseAction() {
    print( "Released" );
  }
  
  onRelease() {
    if( this.buttonType == ButtonType.TOGGLEABLE ) {
      if( !this.released ) {
        this.released = true;
      }
    }
    else {
      if( this.clicked ) {
        this.clicked = false;
        this._buttonReleaseAction();
      }
    }
  }
}

function drawButton( button ) {
  beginShape();
  if( button.clicked ) {
    fill( 255, 150, 150 );
  }
  else if(
    mouseX >= button.position[ 0 ] &&
    mouseX <= button.position[ 0 ] + button.dimensions[ 0 ] &&
    mouseY >= button.position[ 1 ] &&
    mouseY <= button.position[ 1 ] + button.dimensions[ 1 ]
  ) {
    fill( 255, 255, 150 );
  }
  else {
    fill( 255, 255, 255 );
  }
  rect(
    button.position[ 0 ],
    button.position[ 1 ],
    button.dimensions[ 0 ],
    button.dimensions[ 1 ]
  );  
  endShape()
}
