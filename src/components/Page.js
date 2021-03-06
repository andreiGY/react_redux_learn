import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export class Page extends React.Component {

    onBtnClick = e => {
        const year = +e.currentTarget.innerText
        this.props.setYear(year)
    }
    render() {
        const {year, photos} = this.props;
        return (
            <div>
                <div className="page">
                    <button className="btn" onClick={this.onBtnClick}>2018</button>
                    <button className="btn" onClick={this.onBtnClick}>2017</button>
                    <button className="btn" onClick={this.onBtnClick}>2016</button>
                    <button className="btn" onClick={this.onBtnClick}>2015</button>
                    <button className="btn" onClick={this.onBtnClick}>2014</button>
                </div>
                <p className="my_desc"> У тебя {photos.length} фото за {year} год</p>
            </div>
        )
    }
}

Page.PropTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}