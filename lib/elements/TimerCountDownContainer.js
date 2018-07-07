import  React from 'react';
import Span from './Span';
import TimeAndLabelHolder from './TimeAndLabelHolder';
import Label from './Label';
import FullContainer from './FullContainer';
import PropTypes from 'prop-types';


export default class TimerCountDownContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      years: '',
      months:'',
      weeks:'',
      days: '',
      hours: '',
      minutes: '',
      secondsRemaining: '',
      interval: 0,
    };
  }
  tick() {
    if (this.state.years < '0') {
      clearInterval(this.state.interval);
    }
    this.timeCounter();
  }
  componentDidMount() {

    setInterval(() => this.tick(), 1000)
  }
  timeCounter() {
    var today = new Date();
    var BigDay = new Date(this.props.TargetDate);
    var timeLeft = Date.parse(BigDay.toString()) - Date.parse(today.toString());
    var msPerDay = 24 * 60 * 60 * 1000;
    var e_daysLeft = timeLeft / msPerDay;
    var daysLeft = Math.floor(e_daysLeft);
    var yearsLeft = 0;
    if (daysLeft > 365) {
      yearsLeft = Math.floor(daysLeft / 365);
      daysLeft = daysLeft % 365;
    }
    var monthsLeft = Math.floor(e_daysLeft / 31);
    var weeksLeft = Math.floor(e_daysLeft / 7);
    var e_hrsLeft = (e_daysLeft - daysLeft) * 24;
    var hrsLeft = Math.floor(e_hrsLeft % 24);
    var minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
    var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000); 
    this.setState({
      years: yearsLeft.toString(),
      months:monthsLeft.toString(),
      weeks:weeksLeft.toString(),
      days: daysLeft.toString(),
      hours: hrsLeft.toString(),
      minutes: ('0' + minsLeft).slice(-2).toString(),
      secondsRemaining: ('0' + secondsLeft).slice(-2).toString()
    });

  }
  render(){
    return(
      <FullContainer>
        <TimeAndLabelHolder><Label>Years</Label><Span>{this.state.years}</Span></TimeAndLabelHolder>
        <TimeAndLabelHolder><Label>Months</Label><Span>{this.state.months}</Span></TimeAndLabelHolder>
        <TimeAndLabelHolder><Label>Weeks</Label><Span>{this.state.weeks}</Span></TimeAndLabelHolder>
        <TimeAndLabelHolder><Label>Days</Label><Span>{this.state.days}</Span></TimeAndLabelHolder>
        <TimeAndLabelHolder><Label>Hours</Label><Span>{this.state.hours}</Span></TimeAndLabelHolder>
        <TimeAndLabelHolder><Label>Minutes</Label><Span>{this.state.minutes}</Span></TimeAndLabelHolder>
        <TimeAndLabelHolder><Label>Seconds</Label><Span>{this.state.secondsRemaining}</Span></TimeAndLabelHolder>
      </FullContainer>
    );
  }


}

TimerCountDownContainer.propTypes = {
  TargetDate: PropTypes.string,
};

TimerCountDownContainer.defaultProps = {
  TargetDate: "Jan 1, 2019 00:00:00",
};