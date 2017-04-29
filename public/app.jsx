/* app.jsx */
// Helper functions
function fadeIn(ref) {
    // Fade node in after four seconds for one second
    var $node = $(ref.getDOMNode());
    setTimeout(function() {
        $node.animate({
            opacity: 1
        }, 1000);
    }, 4000);
}
// Disable animated scrolling for now because subheading clicks are badly defined
/*
function scrollToName(elementName) {
    // Scroll to indicated heading
    // Use name rather than id to avoid default anchor link behavior
    var target_selector = '[name=\'' + elementName + '\']';
    console.log(target_selector);
    var target_top = $(target_selector).position().top;
    $('.mainContent').animate({ scrollTop: target_top}, 1500);
}
*/
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
        // Animate speech bubble opacity in and out during first 2 seconds
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
        // Portrait element contains nested images of a portrait and a speech bubble
        return (
            <a href="#splash">
                <div ref="portraitImage" className="portrait">
                    <div ref="speechBubble" className="speech"></div>
                </div>
            </a>
        );
    }
});
var NavGroup = React.createClass({
    getInitialState: function() {
        // Initialize closed: no background color, down arrow, no sublinks
        return {
            classes: 'navGroup',
            arrowSrc: 'downarrow.png',
            navLinks: [],
            open: false
        };
    },
    handleClick: function(event) {
        if(this.state.open) {
            // If open, close by removing sublinks, background color and using the down arrow image
            this.setState({
                classes: 'navGroup',
                arrowSrc: 'downarrow.png',
                navLinks: [],
                open: false
            });
        }
        else {
            // If closed, scroll and open by adding sublinks, setting a background color and using the up arrow

            var navLinks = this.props.data.subheadings.map(function(navLink, index) {
                return(
                    <a key={index} href={'#' + navLink.hash}>
                        <div className="navLink">
                            {navLink.text}
                        </div>
                    </a>
                );
            });

            this.setState({
                classes: 'navGroup opened',
                arrowSrc: 'uparrow.png',
                navLinks: navLinks,
                open: true
            });

            // Scroll to corresponding content
            //scrollToName(this.props.data.hash);
        }
    },
    render: function() {
        // NavGroup element contains a heading link with an arrow image and a list of subheading links
        return(
            <div>
                <a href={'#' + this.props.data.hash}>
                    <div className={this.state.classes} onClick={this.handleClick}>
                        {this.props.data.text}
                        <img src={this.state.arrowSrc} className="arrowImg" />
                    </div>
                </a>
                {this.state.navLinks}
            </div>
        );
    }
});
var NavBar = React.createClass({
    componentDidMount: function() {
        // Fade navbar in after 4 seconds
        //fadeIn(this.refs.navBar);
    },
    render: function() {
        // NavBar element contains a title and a list of NavGroups

        var navGroups = this.props.data.map(function(navGroup, index) {
            return(
                <NavGroup key={index} data={navGroup}/>
            );
        });

        return(
            <div ref="navBar" className="navBar">
                <a href="#me">
                    <div className="navTitle">SHAMIK GANGULY</div>
                </a>
                {navGroups}
                <div className="navPad"></div>
            </div>
        );
    }
});

var MainContent = React.createClass({
    scrollToHash: function() {
        /*
        window.requestAnimationFrame(function() {
            var hashElt = $(window.location.hash);
            if(hashElt) {
                hashElt.scrollTop = hashElt.offset().top;
            }
        });
        */
    },
    componentDidMount: function() {
        // Fade main content in after 4 seconds
        //fadeIn(this.refs.mainContent);
        this.scrollToHash();
    },
    componentDidUpdate: function() {
        this.scrollToHash();
    },
    render: function() {
        // MainContent element contains a splash and scrolling content organized by headings and subheadings
        return(
            <div ref="mainContent" className="mainContent">
                <div className="mainScroller">
                    <div id="splash" className="splash">
                        hi, i'm Shamik.
                    </div>
                    <div className="mainText">
                        <h1 id="me">me</h1>
                        <p>
                            {'\u00a0\u00a0'} Hi, I'm Shamik. I'm a product builder, software engineer, UI developer,
                            musician, composer, producer and sound engineer. I'm from Southeast Michigan and I studied
                            computer engineering and sound engineering at the University of Michigan in Ann Arbor.
                        </p>
                        <h1 id="music">music</h1>
                        <p>
                            {'\u00a0\u00a0'} I am a sound engineer, music producer, computer musician, music programmer,
                            composer, and performer. I release my own music with connie.k as
                            {'\u00a0'}<a href="http://jonthalinks.com" target="_blank">Jontha Links</a>.
                            I have recorded and mixed a lot of jazz and hip-hop, and I've
                            created rock, pop, electronic, classical, and folk music as well. I studied performing
                            arts technology at the University of Michigan with a
                            focus in sound engineering. My coursework included composition, computer music, sound
                            recording, sound reinforcement, studio production, sound for theatre, and jazz improvisation.
                            I worked on the audio/video staff at the university's
                            {'\u00a0'}<a href="http://www.lib.umich.edu/audio-studio-digital-media-commons">audio</a> and
                            {'\u00a0'}<a href="http://www.lib.umich.edu/video-studio-digital-media-commons">video</a> studios
                            at the Duderstadt Center, which involved installing and maintaining industry-grade
                            equipment, teaching training classes in the studios, and working on
                            university audio and video recording projects. I have been a performer on
                            piano, guitar, bass, and drums for about a decade and I have played jazz and other
                            styles in a professional setting.
                        </p>
                        <h2 id="production">production/engineering</h2>
                        <p>
                            As a producer/sound engineer I work regularly with Pro Tools and I like to frequent whatever
                            studios I can get to. I have recorded many groups and individuals in the University of Michigan
                            studios using the API Vision consoles and a large selection of recording and
                            processing gear. I worked as a staff engineer / tech / instructor at the studios and I also
                            used them extensively for class and personal projects. I use software like Ableton Live, Pro Tools, Logic, Final Cut, and Melodyne
                            for recording, editing, and mixing.
                        </p>
                        <p>
                            I played in, recorded, mixed, and mastered this
                            {'\u00a0'}<a href="http://jonthalinks.com" target="_blank">Jontha Links</a> production
                            of a cover of Khalid's "Location":
                        </p>
                        <iframe className="youtube"
                            src="https://www.youtube.com/embed/fK9U0ppouTI" frameborder="0" allowfullscreen>
                        </iframe>
                        <p>
                            I was the recording engineer, sound editor, and a mixing engineer on Will Rachofsky's album Dream State:
                        </p>
                        <iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A3JpIPp2h7FHmdZFqpKTr1Q" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
                        <p>
                            I was the lead recording engineer and a mix engineer on some sessions for jazz professor
                            Dennis Wilson and his trombone / vocal ensembles. Those tracks are below:
                        </p>
                        <iframe width="100%" height="300" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/220530569&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true;show_artwork=false">
                        </iframe>
                        <p>
                            I was the assistant recording engineer and Pro Tools operator on new material coming up from
                            {'\u00a0'}<a target="_blank" href="http://www.losgatosmusic.com/">Los Gatos</a>, a local salsa band
                            featuring U of M faculty. I also won the U of M AES student chapter's Mix/Remix competition in
                            the mix section, and will have one of my mixes featured on Naked Dance's next album release.
                            Naked Dance is a genre-bending improvisational "jazz" group comprised of U of M faculty.
                        </p>
                        <p>
                            I recorded, mixed, and mastered singer and actor Noah Weisbart's song "Da-yoo" featuring him
                            on voice and piano and U of M jazz students Noah Henriksson, Mike Perlman, and Everett Reid
                            on trumpet, bass, and piano. On this recording I took more of a pop approach:
                        </p>
                        <iframe width="100%" height="300" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262556824&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true;show_artwork=false">
                        </iframe>
                        <p>
                            I recorded jazz singer <a target="_blank" href="emmalee-sings.com">Emma Aboukasm</a> with
                            {'\u00a0'}<a target="_blank" href="https://owlgame.bandcamp.com/">Lena Sutter</a> and produced a
                            video of our session:
                        </p>
                        <iframe className="youtube"
                            src="https://www.youtube.com/embed/Cdfxld7pj5k" frameborder="0" allowfullscreen>
                        </iframe>
                        <p>
                            I also brought in two jazz bands to record demos
                            for the Jazz Ahead residency application. Those tracks are below.
                        </p>
                        <iframe width="100%" height="300" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/160790453%3Fsecret_token%3Ds-oD2fc&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="300" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/150943264%3Fsecret_token%3Ds-kIoGH&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true;show_artwork=false">
                        </iframe>
                        <p>
                            I am also familiar with a more in-the-box home studio approach.
                            Recently, I recorded vocals for a mixtape using a low-cost
                            bedroom rig and then completed the production both at home and in the university studios.
                            Those tracks are below, and click
                            {'\u00a0'}<a target="_blank" href="http://www.stanforddaily.com/2015/10/22/connie-k-daylight-savings/">here</a>
                            {'\u00a0'}to read an article in the Stanford Daily about the release.
                        </p>
                        <iframe width="100%" height="300" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/153405822&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
                        </iframe>
                        <p>
                            I was sound designer and supervisor for
                            {'\u00a0'}<a target="_blank" href="http://ptguild2.aaps.k12.mi.us/index.html">Pioneer Theatre Guild's</a>{'\u00a0'}
                            production of Rock of Ages. For the show, I used the Allen &amp; Heath iLive house system to
                            set up reinforcement for a full rock band and 20 scripted characters, offstage vocal booths,
                            sound effects, record mics, four monitor mixes, video feeds, and record mixes. I composed
                            the sound effects and managed cues for the effects and live sound. During the show, I live
                            mixed the band and actors from the iLive Surface while calling cues for effects and
                            live sound. I managed a crew of 4 high school students who helped with micing, setup,
                            and cue operation.
                        </p>
                        <img src={"roa.jpg"} className="programNotes"/>
                        <p>
                            I was on the production team for the University of Michigan School of Music, Theatre &amp; Dance's
                            production of Shakespeare's Henry IV: Part 1. I was one of two composers and three sound
                            designers, participating in design meetings, production meetings, and the tech process
                            to create and integrate sound into the play and into the space using 12 channels of audio
                            at the Power Center.
                        </p>
                        <img src={"henry_iv_program.jpeg"} className="programNotes"/>
                        <p>
                        Here are some performance projects I worked on years ago, which were also my
                        first forays into sound engineering:
                        </p>
                        <p>
                            "D.I.Y." is a jazz track that I composed in 2012 for a four-piece jazz band, and proceeded
                            to perform, record, mix, and edit on my own.
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/170481522&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                            Below are some other tracks I recorded and mixed at that time during my first exploration
                            of the studio. I performed Concerto Romantique, and played bass on the other two tracks.
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173370075&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173370258&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173370369&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                            I have also worked on some sound for video. I produced both the video and audio for the
                            EECS 452 project demo video as shown above in the <a href="#dsp">DSP</a> section. I also
                            did a re-edit of this video for the U of M Campus Farm. I was responsible for re-recording
                            narration, doctoring the pre-mixed audio that could not be re-recorded, and then re-editing
                            and mixing the parts for better audibility and flow. I also worked on some of the video editing
                            and added credits in Final Cut.
                        </p>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/bguLtEvmgGQ">
                        </iframe>
                        <p>
                            I did some film in high school for spirit events, which was amateur and mostly created for an
                            internal audience, but was a huge learning experience for me in terms of storyboarding,
                            screenwriting, audio/video recording and editing, sound for film, and directing. I made the
                            music video shown below with a friend, driving the creative process from conception to
                            release in a few weeks with very limited help and resources.
                        </p>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/tfWqQgqbKuw">
                        </iframe>
                        <p>
                            Some more of my production work is included in the composition section below.
                        </p>
                        <h2 id="composition">composition</h2>
                        <p>
                            In addition to recording and mixing, I like to compose for both instruments and the computer.
                            I use tools like DAWs, Max/MSP, Sibelius, Blender, Unity, and web code for composing.
                        </p>
                        <p>
                            As a side project in 2015-2016, I made an audio/video piece called "def orbit():" featuring
                            a 3D animation and original computer music. I used Blender for modeling and animation,
                            and Blender's Python API to automate the animation and object duplication processes. Much
                            of the visual timing is generated through Python using the MIDI information that was used
                            to create the music, so the audio and video are programatically related. The scripts are
                            available <a target="_blank" href="https://github.com/shamgang/def-orbit">here</a>.
                            The piece was featured at the Performing Arts Technology Showcase at the UofM SMTD and at the inaugural
                            {'\u00a0'}<a target="_blank" href="http://threadsfestival.com/">Threads All Arts Festival</a>
                            . Check it out (best experienced fullscreen, loud, in the dark):
                        </p>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/DSIh12SkbcA">
                        </iframe>
                        <p>
                            I wrote this electronic composition called Glimmering, using one of my favorite Beatles
                            samples, along with some custom synths and some drum grooves.
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/282352722&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                            As a member of U of M's Digital Music Ensemble, I helped to ideate, design, and create our
                            April 2016 installation "Gypsy Pond", in which we made an embedded system out of a prepared
                            piano using copper tape, Pure Data, an Arduino, and relays. The piano triggered sound
                            and movement in structures we created to float on the pond. Below are some excerpts:
                        </p>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/DGiOgMyf52c">
                        </iframe>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/3CuQ6agTcXg">
                        </iframe>
                        <p>
                            Below are some compositions I have made in my coursework. The field compositions are made
                            entirely of recordings from a stereo portable recorder. "Mthmtcs" is made from both recordings
                            and software instruments, and "Hydroculture" is made entirely from one short "seed" of MIDI
                            information manipulated in various ways.
                        </p>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182283929&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182281518&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182279372&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182282519&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                        </iframe>
                        <p>
                            Here are a few compositions of mine for instruments. I wrote "DIY" for guitar, bass, and piano,
                            and a recording can be found above in the <a href="#production">production</a> section.
                            I wrote "White Knuckles" for piano as part of a composition class, and it explores frantic
                            dissonance, moving in and out of tonality, and complex linear two-hand rhythms.
                        </p>
                        <iframe width="100%" height="480"
                            src="https://drive.google.com/a/umich.edu/file/d/0B2vw2frJrQnRVXFuUFp3TTZSOEk/preview">
                        </iframe>
                        <iframe width="100%" height="480"
                            src="https://drive.google.com/file/d/0B2vw2frJrQnRd211TUZCdXJzTTg/preview">
                        </iframe>
                        <h2 id="performance">performance</h2>
                        <p>
                            I've been performing from a young age, mostly in ensemble situations. I've been on stage
                            playing classical, jazz, funk, rock, free improvisation, and other styles. My primary
                            instrument is guitar, and I've also studied and performed on drums, electric bass, and
                            (rarely) keyboards. I focus on jazz, improvisation, and jazz-based styles. Some of my
                            performance is featured in tracks that I produced, shown above in the
                            {'\u00a0'}<a href="#production">production</a> section.
                        </p>
                        <p>
                            Below is a video of a performance of the second and third movements of Astor Piazzolla's
                            Histoire du Tango as part of my friend's recital.
                        </p>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/gWqmQyDVqA4">
                        </iframe>
                        <p>
                            I also dabbled in other types of stage performance as part of my teenage explorations:
                            I wrote and performed sketch comedy with friends, and I directed, taught, and performed
                            amateur group dance for fun and education. Below is a performance of a dance from the film
                            Lagaan that I adapted for the stage and taught to classmates, and a video from a spirit
                            rally performance including other adapted choreographies. While amateur, these performances
                            were good experiences in group organization and stage direction for relatively large (500+)
                            audiences.
                        </p>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/_XysOXOVTyI">
                        </iframe>
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/5-d4uociv6E">
                        </iframe>
                        <p>
                            Some of my early jazz performance was recorded in high school and uploaded to
                            {'\u00a0'}<a target="_blank" href="https://www.youtube.com/user/anwoz1/videos">this</a>
                            {'\u00a0'}YouTube channel.
                        </p>

                        <h1 id="software">software</h1>
                        <p>
                            {'\u00a0\u00a0'} I write software to build products, create experiences, and break technical
                        barriers.
                        In industry, I've worked on consumer devices, machine learning systems, web and mobile applications, and
                        native UIs and application frameworks. In the process I have learned and applied skills in
                        system design, object-oriented programming, distributed programming, multi-threaded CPU programming,
                        graphics, massively parallel computation, web design and development, Android UI and platform, performance benchmarking,
                        and cross-platform build systems. In academia I have studied and implemented operating
                        systems, machine learning, computer vision, digital signal processing, embedded systems,
                        data structures and algorithms, and processor design, and I have researched optimizations
                        in X-Ray computed tomography using concepts in 3D mathematics and linear algebra
                        implemented with GPUs.
                        I regularly use Python, JavaScript, HTML/CSS, and Java, I've worked extensively with
                        C, C++, and MATLAB, and I've also used OpenCL, SQL, PHP, C&#35;, and Ruby. I work with technologies
                        such as Node.js, Angular2.0, Typescript, Gulp, Spark, Mesos, Docker, S3, Postgres, Redshift, and MySQL.
                        I've worked in development environments
                        in Linux, Mac, and Windows, using Bash, Make, CMake, Gradle, IntelliJ, Unity, and Code Composer.
                        </p>
                        <h2 id="lab">amazon lab126</h2>
                        <p>
                        I'm currently a software development engineer at Amazon working on emerging tech at the devices
                        lab Lab126. I work in the imaging systems group building innovative computer vision products.
                        We recently released the
                        {'\u00a0'}<a target="_blank" href="https://techcrunch.com/video/amazons-new-echo-look-has-a-built-in-camera-for-style-selfies/5900fe8c8c08e052e165f224/">Echo Look</a> and the
                        {'\u00a0'}<a target="_blank" href="https://techcrunch.com/2017/03/17/amazon-will-now-tell-prime-members-what-to-wear-via-a-new-outfit-compare-feature/?ncid=rss">Outfit Compare</a> feature on the Amazon app.
                        <iframe className="youtube" frameborder="0" allowfullscreen
                            src="https://www.youtube.com/embed/9X_fP4pPWPw">
                        </iframe>
                        I work on a frameworks team building systems to execute cutting-edge computer vision and
                        machine learning algorithms on massive distributed datasets. I am also the lead web developer
                        and designer of internal dashboards for algorithm development and product management
                        and I work on the back-end systems that populate our dashboards with data.
                        I am frequently responsible for spearheading the design of our systems, and I lead design and
                        customer meetings daily. I interview and mentor other engineers and focus on leadership and
                        efficient collaboration and communication. I work in many languages daily, most frequently
                        JavaScript, Python, and Java. Technologies I use daily include Node.js, Angular 2.0, Typescript,
                        Gulp, Postgres, Redshift, and Spark.
                        </p>
                        <p>
                        I was an intern at Lab during the summers of 2014 and 2015 as well. In 2014,
                        I worked on the Fire TV, prototyping features related to graphics, application
                        cacheing, USB storage, and benchmarking, which also had implications for the then-unreleased Fire TV
                        Stick. I also worked on the main Android UI. I spent time with Android, Java, JNI,
                        C/C++, CMake, Android NDK toolchains, Android Studio, Gradle, and Git. In 2015, I worked
                        on an emerging product, designing tools for development and data collection. I designed
                        and built a many-threaded UI in C++ using Qt, CMake to enable user-friendly presentation and
                        analysis of complex product code modules. I also designed and built a website for subjective
                        data collection using HTML5, CSS, and AngularJS in a Ruby on Rails environment. I also
                        worked with Java and JNI to implement cloud interfaces.
                        </p>
                        <h2 id="xray">u of m medical imaging</h2>
                        <p>
                        During my sophomore summer I worked on a team headed by the internationally acclaimed
                            {'\u00a0'}<a target="_blank" href="http://web.eecs.umich.edu/~fessler/">Professor Jeffrey Fessler</a>
                            {'\u00a0'}researching methods for X-ray computed tomography that
                        significantly outperform status quo methods with the help of parallel computing on GPUs.
                        This involved analyzing current research in medical imaging in order to devise massively
                        parallel algorithms from applicable linear algebra formulae, and then implementing those
                        algorithms using both C and OpenCL for optimal cooperation between the CPU and GPUs.
                        This project involved heavy optimization, with every line of code written to maximize
                        efficiency with respect to the hardware.
                        </p>
                        <h2 id="nuubo">nuubo</h2>
                        <p>
                        During my freshman summer I worked in Madrid at a wearable medical technology startup called
                            {'\u00a0'}<a target="_blank" href="http://www.nuubo.com/">Nuubo</a> that has created
                        an EKG in the form of an undershirt. I worked on porting libraries to the GPU using
                        OpenCL to investigate performance improvements. I worked in a Spanish-speaking office
                        and became conversational in Spanish during this time.
                        </p>
                        <h2 id="web">web</h2>
                        <p>
                        I've been involved with web development for personal and professional projects.
                        Besides the obvious use of JavaScript, HTML, and CSS, I use Angular 1 and 2 (the latter
                        with TypeScript), React, Node, jQuery, Ruby on Rails, Bootstrap, Foundation, SQL, and PHP.
                        I often use IntelliJ-based IDEs and I've used both Gulp and Grunt for build and task running.
                        This website is one example of my web development, and the source is hosted on
                        GitHub <a target="_blank" href="https://github.com/shamgang/resume">here</a>.
                        </p>
                        <p>
                        I am building a web UI at
                            {'\u00a0'}<a href="#lab">Amazon</a> using Angular 2 with TypeScript on a Node
                        backend, with Gulp.
                        Last year I built an internal website at Amazon using Angular and Ruby on Rails.
                        Prior to that, I was responsible for a redesign of
                            {'\u00a0'}<a target="_blank" href="https://www.recourse.co">Recourse.co</a>
                            {'\u00a0'}with a particular focus on responsiveness and cross-device compatibility.
                        I have also worked on personal projects, including an event tracking and crowdfunding
                        website built with APIs from Google Maps, Stripe, and Facebook.
                        </p>
                        <h2 id="android">android</h2>
                        <p>
                        I worked extensively with Android when developing for the Fire TV at Amazon. I worked daily
                        with a very large Android code base, working on UI as well low-level concerns such as
                        graphics and USB on the Android platform. I developed Java/Android code in Android Studio
                        with Gradle for UI development and I worked with C++, the Android NDK, JNI, and CMake for
                        system-level development.
                        </p>
                        <p>
                        I have also experimented with Android personally. I created a transaction-tracking
                        application called EasyMoney which originated as a need for a quick, simple budgeting
                        tool and as an exercise in product design and best practices for user-facing Android code.
                        The app is published in the
                            {'\u00a0'}<a target="_blank" href="https://play.google.com/store/apps/details?id=com.shamik.easymoney.app&hl=en">Google Play Store</a>.{'\u00a0'}
                        The source is available for browsing on <a target="_blank" href="https://github.com/shamgang/easymoney">GitHub</a>.{'\u00a0'}
                        I have also worked on an app
                        for tracking events using the Google Maps, Stripe, and Facebook Android APIs, in tandem
                        with the aforementioned web project.
                        </p>
                        <h2 id="c++">C/C++</h2>
                        <p>
                        I have studied C and C++ throughout my coursework and have used these languages extensively
                        in projects and in industry. In coursework, I have implemented many data structures
                        and algorithms in C++, as well as operating system, file system, and distributed system
                        functionality. I also worked with many C++ experts developing a large-scale, high-quality
                        C++ code base at Amazon. I have used C to implement image processing,
                        real-time DSP, embedded system communication, and processor simulation.
                        </p>
                        <h2 id="matlab">matlab</h2>
                        <p>
                        I have used MATLAB extensively in
                            {'\u00a0'}<a href="#dsp">DSP</a>{'\u00a0'}
                        work for prototyping signal processing, signal generation, UI, and matrix-based computation.
                        I have also used MATLAB and extra toolkits for
                            {'\u00a0'}<a href="#cvml">computer vision</a>, developing object trackers, panorama stitchers,
                        neural networks, and other applications.
                        </p>
                        <h2 id="python">python</h2>
                        <p>
                        I develop Python libraries regularly as part of platform development at
                            {'\u00a0'}<a href="#lab">Amazon</a>. I have also used Python for
                            {'\u00a0'}<a href="#cvml">machine learning</a>, implementing face classifiers,
                        parts-of-speech taggers, and many other learning algorithms. I also used Python through
                        Blender to automate the animation process of a short animated audio/video piece I made
                        as a side project. See the <a href="#composition">composition</a> section.
                        </p>
                        <h2 id="dsp">digital signal processing</h2>
                        <p>
                        As part of my computer engineering coursework I've studied both analog
                        and digital signal theory as well as applications of digital signal processing. My senior
                        design project was an embedded system for processing, visualizing, and analyzing music
                        signals. I produced this demo video of the project:
                        </p>
                        <iframe className="youtube"
                            src="//www.youtube.com/embed/lzsdMJA22CA?rel=0&showinfo=0&autohide=1" frameborder="0" allowfullscreen>
                        </iframe>
                        <p>
                        The project involved real-time effects processing, note and key detection, graphics
                        programming, serial inter-device communication, and circuit design using tools such as
                        TI DSP chips and microcontrollers, Altera FPGAs, MATLAB, C, I2C, I2S, SPI, UART, Verilog, soldering,
                        laser cutters, machine presses, SolidWorks, Code Composer Studio, oscilloscopes, and
                        function generators. The algorithm implementations are hosted on GitHub
                            {'\u00a0'}<a target="_blank" href="https://github.com/shamgang/mpsembedded">here</a>.
                        </p>
                        <p>
                        My freshman year, I created a music synthesizer and transcriber in MATLAB. The presentation
                        video for that project is here:
                        </p>
                        <iframe className="youtube"
                            src="//www.youtube.com/embed/Hl607Lvl_D4?rel=0&showinfo=0&autohide=1&start=260" frameborder="0" allowfullscreen>
                        </iframe>
                        <p>
                        This was my first experience with programming and it involved GUI creation, pitch detection,
                        and digital synthesis.
                        </p>
                        <h2 id="embedded">embedded systems</h2>
                        <p>
                        I worked with embedded systems in my senior project, using a microcontroller, two DSP chips,
                        an FPGA, and a combination of analog, SPI, I2C, I2S, and VGA communication. See more above
                        in the <a href="#dsp">DSP</a> section.
                        </p>
                        <h2 id="parallel">parallel computing</h2>
                        <p>
                        I worked with GPU parallel computing for performance optimization at
                            {'\u00a0'}<a href="#nuubo">Nuubo</a> and <a href="#xray">UofM</a>. I have also worked with
                        parallelism in operating systems coursework building a concurrent disk scheduler,
                        a thread library, an external pager, and a distributed file system.
                        </p>
                        <h2 id="cvml">cv and ml</h2>
                        <p>
                        I have studied computer vision and machine learning in my coursework. In computer vision I
                        implemented projects in demosaicing and auto-alignment, height map reconstruction using
                        photometric stereo, blob detection, panorama stitching using feature extraction and RANSAC,
                        and handwritten digit recognition using convolutional neural networks, all in MATLAB.
                        In machine learning, I studied linear classifiers and regression, support vector machines,
                        decision trees, ensemble methods, collaborative filtering for recommender problems,
                        clustering, and generative models. I implemented a tweet classifier to decide whether
                        tweeted reviews are positive or negative using SVMs and cross-validation. I implemented
                        facial image clustering using principal component analysis, K-means/medioids and
                        hierarchical clustering. I built a parts-of-speech tagger using mixture models. I
                        implemented all of this functionality in Python with the help of the scikit-learn and
                        pyplot libraries.
                        </p>
                        <h2 id="agile">agile</h2>
                        <p>
                        I have worked on four separate occasions on teams practicing agile development. I am
                        well acquainted with sprint planning, Scrum, and task/story workflows and I use these
                        practices to organize, plan, and track my own and my team's development.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});
var MainContainer = React.createClass({
    render: function() {
        // MainContainer element contains the Portrait, NavBar, and MainContent
        // It stores the model that populates the NavBar

        var navData = [
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
                text: 'software',
                hash: 'software',
                subheadings: [
                    { text: 'amazon lab126', hash: 'lab'},
                    { text: 'medical imaging', hash: 'xray'},
                    { text: 'nuubo', hash: 'nuubo'},
                    { text: 'web', hash: 'web' },
                    { text: 'android', hash: 'android' },
                    { text: 'C/C++', hash: 'c++' },
                    { text: 'matlab', hash: 'matlab' },
                    { text: 'python', hash: 'python' },
                    { text: 'dsp', hash: 'dsp' },
                    { text: 'embedded systems', hash: 'embedded' },
                    { text: 'parallel computing', hash: 'parallel' },
                    { text: 'cv and ml', hash: 'cvml' },
                    { text: 'agile', hash: 'agile' }
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
