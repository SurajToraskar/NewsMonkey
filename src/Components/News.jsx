import React, { Component } from "react";
import Newsitem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"

class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "news-com-au",
    //             "name": "News.com.au"
    //         },
    //         "author": "Andrew McMurtry",
    //         "title": "Son’s Warnie tribute is as perfect as it gets",
    //         "description": "Jackson Warne, the son of late Aussie cricket legend Shane Warne, has celebrated what would have been his father&rsquo;s 54th birthday in nearly the perfect way.",
    //         "url": "https://www.news.com.au/sport/cricket/sons-shane-warne-birthday-tribute-could-not-be-more-perfect/news-story/2356c312acd1874527399d38bef4c239",
    //         "urlToImage": "https://content.api.news/v3/images/bin/1b188a8f6158d030412e10beaa9b252b",
    //         "publishedAt": "2023-09-14T08:07:00Z",
    //         "content": "Jackson Warne, the son of late Aussie cricket legend Shane Warne, has celebrated what would have been his father’s 54th birthday in nearly the perfect way.\r\nIt is the second birthday since Warne — wh… [+2703 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-sport",
    //             "name": "BBC Sport"
    //         },
    //         "author": null,
    //         "title": "Cricket Australia makes neck protectors compulsory",
    //         "description": "Cricket Australia brings in new rules which will require batters to wear neck protectors on their helmets when facing fast or medium bowling.",
    //         "url": "http://www.bbc.co.uk/sport/cricket/66805723",
    //         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E89C/production/_131084595_gettyimages-1171931485.jpg",
    //         "publishedAt": "2023-09-14T07:37:20.4176247Z",
    //         "content": "Australia batter Steve Smith says neck protectors make him feel \"claustrophobic'\r\nCricket Australia has made it mandatory for batters to wear neck protectors on their helmets when facing fast or medi… [+1505 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-sport",
    //             "name": "BBC Sport"
    //         },
    //         "author": null,
    //         "title": "'Stokes tees off to put rest of world on notice'",
    //         "description": "Ben Stokes was due to be playing golf at the PGA Championship this week, instead he teed off against New Zealand and put the rest of the world on notice, says chief cricket writer Stephan Shemilt.",
    //         "url": "http://www.bbc.co.uk/sport/cricket/66804577",
    //         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/57A6/production/_131083422_benstokes.jpg",
    //         "publishedAt": "2023-09-13T23:22:20.4986499Z",
    //         "content": "In another world, Ben Stokes was due to be playing golf this week.\r\nWhen he was still a former member of England's one-day team, Stokes was scheduled to be part of the BMW PGA Championship at Wentwor… [+4637 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "al-jazeera-english",
    //             "name": "Al Jazeera English"
    //         },
    //         "author": "Hafsa Adil",
    //         "title": "‘Special connection’: Sri Lanka’s love affair with Pakistan’s cricket team",
    //         "description": "Many Sri Lankans speak of a decades-old bond between the two South Asian nations – in cricket and beyond.",
    //         "url": "http://www.aljazeera.com/sports/2023/9/13/special-connection-sri-lankas-love-affair-with-pakistans-cricket-team",
    //         "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/IMG_6627-1694607976.jpg?resize=1920%2C1440",
    //         "publishedAt": "2023-09-13T13:23:54Z",
    //         "content": "Colombo, Sri Lanka Kalana Weerasinghes love affair with Pakistans cricket team began 27 years ago, when Sri Lanka beat Australia to win its maiden Cricket World Cup in Pakistans eastern metropolis of… [+6695 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]
    static defaultProps={
        pageSize:8,
        country:"in"
    }
    static propTypes={
        pageSize:PropTypes.number,
        country:PropTypes.string
    }
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50faf62c0d534e45b40097b46e4fc195&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        });
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }


    async componentDidMount() {
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50faf62c0d534e45b40097b46e4fc195&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({
        //     loading: true
        // });
        // const data = await fetch(url);
        // const parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: 0,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews(); 
    }

    handlePrevClick = async () => {
        // console.log("Previous");
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50faf62c0d534e45b40097b46e4fc195&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // const data = await fetch(url);
        // const parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: true
        // })
        this.setState({
            page:this.state.page-1
        })
        this.updateNews();
    }
    handleNextClick = async () => {
        // if (this.state.page + 1 > Math.ceil((this.state.totalResults / this.props.pageSize))) {

        // }
        // else {
            // console.log("Next");
            // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=50faf62c0d534e45b40097b46e4fc195&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            // this.setState({ loading: true });
            // const data = await fetch(url);
            // const parsedData = await data.json();
            // this.setState({
            //     articles: parsedData.articles,
            //     page: this.state.page + 1,
            //     loading: false
            // })

            this.setState({
                page:this.state.page+1
            })
            this.updateNews();
        // }
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center my-3">NewsMonkey - Headlines</h1> 
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!(this.state.loading)&&this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : " "} description={element.description ? element.description : "  "} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-around my-4">
                    <button className="btn btn-dark" disabled={this.state.page < 1} onClick={this.handlePrevClick}>&larr;Previous</button>
                    <button className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}


export default News;