// React classes
var Portrait = React.createClass({
    componentDidMount: function() {
/*
        // Animate portrait from full screen to top center after 2 seconds
        var $portraitImage = $(this.refs.portraitImage.getDOMNode());
        setTimeout(function() {
            $portraitImage.animate({
                width: '15em',
                height: '10em'
            }, 2000);
        }, 2000);
        // Animate speech bubble opacity in and out
        var $speechBubble = $(this.refs.speechBubble.getDOMNode());
        $speechBubble.animate({
            opacity: 1
        }, 1000, function() {
            $speechBubble.animate({
                opacity: 0
            }, 1000)
        });
*/
    },
    render: function() {
        return (
            <div ref="portraitImage" className="portrait">
                <div ref="speechBubble" className="speech"></div>
            </div>
        );
    }
});
var NavGroup = React.createClass({
    getInitialState: function() {
        return {
            classes: 'navGroup',
            arrowSrc: 'downarrow.png',
            navLinks: [],
            open: false
        };
    },
    handleClick: function(event) {
        event.preventDefault();

        if(this.state.open) {
            this.setState({
                classes: 'navGroup',
                arrowSrc: 'downarrow.png',
                navLinks: [],
                open: false
            });
        }
        else {
            var navLinks = this.props.data.subheadings.map(function(navLink, index) {
                return(
                    <a key={index} href={'#' + navLink.hash}>
                        <div className="navLink">{navLink.text}</div>
                    </a>
                );
            });

            this.setState({
                classes: 'navGroup opened',
                arrowSrc: 'uparrow.png',
                navLinks: navLinks,
                open: true
            });

            window.location.hash = this.props.data.hash;
            var target_id = window.location.hash;
            var target_top = $(target_id).offset().top;
            $('.mainContent').animate({ scrollTop: target_top}, 1500);
        }
    },
    render: function() {
        return(
            <a href={'#' + this.props.data.hash}>
                <div className={this.state.classes} onClick={this.handleClick}>
                    {this.props.data.text}
                    <img src={this.state.arrowSrc} className="arrowImg" />
                </div>
                {this.state.navLinks}
            </a>
        );
    }
});
var NavBar = React.createClass({
    componentDidMount: function() {
/*
        // Animate navbar in after 4 seconds
        var $navBar = $(this.refs.navBar.getDOMNode());
        setTimeout(function() {
            $navBar.animate({
                opacity: 1
            }, 1000);
        }, 4000);
*/
    },
    render: function() {
        var navGroups = this.props.data.map(function(navGroup, index) {
            return(
                <NavGroup key={index} data={navGroup}/>
            );
        });

        return(
            <div ref="navBar" className="navBar">
                <div className="navTitle">SHAMIK GANGULY</div>
                {navGroups}
                <div className="navPad"></div>
            </div>
        );
    }
});
var MainContent = React.createClass({
    componentDidMount: function() {
/*
        // Animate main content in after 4 seconds
        var $mainContent = $(this.refs.mainContent.getDOMNode());
        setTimeout(function() {
            $mainContent.animate({
                opacity: 1
            }, 1000);
        }, 4000);
*/
    },
    render: function() {
        return(
            <div ref="mainContent" className="mainContent">
                <div className="splash">
                    hi, i'm Shamik. this is my website.
                </div>
                <div className="mainText">
                    <h1>me</h1>
                    <p>
                        {'\u00a0\u00a0'} I'm a guy who likes to make stuff. I also like to create stuff and learn stuff and
                        do stuff. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h1 id="software">software</h1>
                    <p>
                        {'\u00a0\u00a0'} I write software. Lots of lots of lots of software. Pretty well. Pretty often.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        );
    }
});
var MainContainer = React.createClass({
    render: function() {
        var navData = [
            {
                text: 'software',
                hash: 'software',
                subheadings: [
                    { text: 'C/C++', hash: 'c++' },
                    { text: 'web', hash: 'web' },
                    { text: 'android', hash: 'android' },
                    { text: 'embedded systems', hash: 'embedded' },
                    { text: 'parallel computing', hash: 'parallel' },
                    { text: 'DSP', hash: 'dsp' },
                    { text: 'CV and ML', hash: 'cvml' },
                    { text: 'Agile', hash: 'agile' }
                ]
            },
            {
                text: 'music',
                hash: 'music',
                subheadings: [
                    { text: 'production/engineering', hash: 'production' },
                    { text: 'composition', hash: 'composition' },
                    { text: 'performance', hash: 'performance' }
                ]
            },
            {
                text: 'writing',
                hash: 'writing',
                subheadings: [
                    { text: 'Michigan Daily', hash: 'daily'},
                    { text: 'essays', hash: 'essays'}
                ]
            }
        ];

        return(
            <div className="mainContainer">
                <Portrait />
                <NavBar data={navData} />
                <MainContent />
            </div>
        );
    }
});
// Render the container
React.render(
    <MainContainer />,
    document.getElementById('content')
);