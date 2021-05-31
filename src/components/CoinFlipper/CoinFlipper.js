import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      total : { totalSide : 0, turaSide : 0, yaziSide : 0}
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.state.total.totalSide++;
    let randomSide = Math.floor(Math.random() * 2);

    setTimeout(() =>{
      if(randomSide > 0){
        this.setState({side : "yazi"})
        this.state.total.yaziSide++;
      }else{
        this.setState({side : "tura"})
        this.state.total.turaSide++;
      }
    },500)

    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
   
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.total.totalSide} </strong>
          atıştan
          <strong> {this.state.total.turaSide} </strong> tura
          <strong> {this.state.total.yaziSide} </strong>
           yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
