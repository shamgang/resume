/* app.jsx */
// React classes
var MainContent = React.createClass({
    render: function() {
        // MainContent element contains a splash and scrolling content organized by headings and subheadings
        return(
            <div ref="mainContent" className="mainContent">
                <div className="mainScroller">
                    <div id="splash" className="splash">
                        <div className="splashText">
                            hi, i'm Shamik.
                        </div>
                        <div className="splashBack"></div>
                        <div className="splashFront"></div>
                    </div>
                    <div className="mainText">
                        <p>
                            I make <a href="#music">music</a>
                            <br /><br />
                            I build <a href="#technology">technology</a>
                        </p>
                        <br/>
                        <h1 id="music">music</h1>
                        <p>
                            I produce, compose, record, mix, master, and perform.
                            <br/><br/>
                            Right now I'm focused on
                            {'\u00a0'}<a href="http://jonthalinks.com" target="_blank">Jontha Links</a>.
                            <br/><br/>
                            <div className="soundcloud">
                                <iframe width="100%" height="100%" scrolling="no" frameborder="no"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/446969886&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true;show_artwork=false">
                                </iframe>
                            </div>
                            <br/><br/>
                            <div className="youtube">
                                <iframe width="100%" height="100%"
                                    src="https://www.youtube.com/embed/FoQrzcGHhA4" frameborder="0" allowfullscreen>
                                </iframe>
                            </div>
                        </p>
                        <br/><br/>
                        <p>
                            I run full band sessions in large multi-room studios on 48-channel consoles.
                            <br/>
                            I build multitracks using my own home studio and portable equipment, all in the box.
                            <br/>
                            I studied Sound Engineering at the University of Michigan.
                            <br/>
                            I worked in the world-class audio and video studios at the University of Michigan.
                        </p>
                        <p>
                            I engineered Will Rachofsky's album Dream State.
                        </p>
                        <br/><br/>
                        <div className="spotify">
                            <iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A3JpIPp2h7FHmdZFqpKTr1Q" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
                        </div>
                        <br/><br/>
                        <div className="youtube">
                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/D7tY4fYsev0" frameborder="0" allowfullscreen>
                            </iframe>
                        </div>
                        <br/><br/><br/>
                        <p>
                            I assistant engineered Los Gatos' album Guarach&eacute;ate.
                        </p>
                        <br/><br/>
                        <div className="spotify">
                            <iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A4GMtXxO5KibjqRRzqsUWju" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
                        </div>
                        <br/><br/>
                        <p>
                          I engineered lots of jazz at UofM with the amazing musicians there.
                        </p>
                        <br/><br/>
                        <div className="soundcloud">
                            <iframe width="100%" height="100%" scrolling="no" frameborder="no"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261515036&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                            </iframe>
                        </div>
                        <br/><br/>
                        <div className="youtube">
                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/Cdfxld7pj5k" frameborder="0" allowfullscreen>
                            </iframe>
                        </div>
                        <br/><br/>
                        <div className="soundcloud">
                            <iframe width="100%" height="100%" scrolling="no" frameborder="no"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230953582%3Fsecret_token%3Ds-LZSEF&color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                            </iframe>
                        </div>
                        <br/><br/>
                        <div className="soundcloud">
                            <iframe width="100%" height="100%" scrolling="no" frameborder="no"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230953587%3Fsecret_token%3Ds-grae7&color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                            </iframe>
                        </div>
                        <br/><br/>
                        <div className="soundcloud">
                            <iframe width="100%" height="100%" scrolling="no" frameborder="no"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228967605%3Fsecret_token%3Ds-9v2Uu&color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                            </iframe>
                        </div>
                        <br/><br/><br/>
                        <p>
                            I run live sound.
                            <br/>
                            I sound design and compose for large stage productions.
                            <br/>
                            I supervise sound crew to mic dozens of actors, a choir, and a full band.
                            <br/>
                            I set up distributed amplification and routing in large venues.
                            <br/>
                            I live mix 64+ channels for FOH, 3 monitor mixes, and a record mix while managing sound cues.
                        </p>
                        <br/><br/>
                        <div className="programNotes">
                            <img src={"roa.jpg"} />
                        </div>
                        <br/><br/>
                        <div className="programNotes">
                            <img src={"henry_iv_program.jpeg"} />
                        </div>
                        <br/><br/><br/>
                        <p>
                            I compose.
                            <br/>
                            I create 3D algorithmic worlds of sound and color.
                            <br/>
                            I combine the nostalgic with the otherworldly.
                            <br/>
                            I meld materials, instruments, electronics, and nature.
                            <br/>
                            I explore frantic dissonance and liminal tonality.
                        </p>
                        <br/><br/>
                        <div className="youtube">
                            <iframe width="100%" height="100%" frameborder="0" allowfullscreen
                                src="https://www.youtube.com/embed/DSIh12SkbcA">
                            </iframe>
                        </div>
                        <br/><br/>
                        <div className="soundcloud">
                            <iframe width="100%" height="100%" scrolling="no" frameborder="no"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/282352722&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                            </iframe>
                        </div>
                        <br/><br/>
                        <div className="youtube">
                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/DGiOgMyf52c" frameborder="0" allowfullscreen>
                            </iframe>
                        </div>
                        <br/><br/>
                        <div className="soundcloud">
                            <iframe width="100%" height="100%" scrolling="no" frameborder="no"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182279372&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_artwork=false">
                            </iframe>
                        </div>
                        <br/><br/>
                        <iframe width="100%" height="480"
                            src="https://drive.google.com/file/d/0B2vw2frJrQnRd211TUZCdXJzTTg/preview">
                        </iframe>
                        <br/><br/><br/>
                        <p>
                            I play hip-hop, funk, jazz, rock, pop, and electronic music on stage.
                            <br/>
                            I play guitar, drums, bass, and keyboards, in that order.
                            <br/>
                            I've played multimedia performances and avant-garde free improvisation.
                            <br/>
                            It all started with classical.
                        </p>
                        <br/><br/>
                        <div className="youtube">
                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/gWqmQyDVqA4" frameborder="0" allowfullscreen>
                            </iframe>
                        </div>
                        <br/><br/>
                        <h1 id="technology">technology</h1>
                        <p>
                        I create artificial intelligence.
                        <br/>
                        I build consumer products.
                        <br/>
                        I design scalable systems.
                        <br/>
                        I write robust object-oriented software.
                        <br/>
                        I lead.
                        <br/><br/>
                        I design big data framework.
                        <br/>
                        I build big data pipelines.
                        <br/>
                        I create websites and web framework.
                        <br/>
                        I create mobile apps.
                        <br/>
                        I write and optimize algorithms for distributed systems and massively parallel GPU systems.
                        <br/>
                        I work in many languages, most often Python and Javascript.
                        </p>
                        <p>
                          I work as a platform engineer at Amazon's Lab126.
                          <br/>
                          My team develops emerging technologies based on artificial intelligence and computer vision.
                          <br/>
                          We recently took the
                          {'\u00a0'}<a target="_blank" href="https://techcrunch.com/2017/10/25/amazon-debuts-cloud-cam-and-key-to-take-on-nest-august-and-others-in-home-security/">Cloud Cam</a>
                          {'\u00a0'}and the
                          {'\u00a0'}<a target="_blank" href="https://techcrunch.com/video/amazons-new-echo-look-has-a-built-in-camera-for-style-selfies/5900fe8c8c08e052e165f224/">Echo Look</a>
                          {'\u00a0'}to market.
                        </p>
                          <br/><br/>
                          <div className="youtube">
                              <iframe width="100%" height="100%"
                                  src="https://www.youtube.com/embed/mP1eciwiMUc" frameborder="0" allowfullscreen>
                              </iframe>
                          </div>
                          <br/><br/>
                          <div className="youtube">
                              <iframe width="100%" height="100%"
                                  src="https://www.youtube.com/embed/9X_fP4pPWPw" frameborder="0" allowfullscreen>
                              </iframe>
                          </div>
                          <br/>
                        <p>
                          Before that I worked on Android UI, graphics, and USB for the Fire TV.
                        </p>
                        <br/>
                        <p>
                        I worked with the internationally acclaimed
                        {'\u00a0'}<a target="_blank" href="https://web.eecs.umich.edu/~fessler/bio/index.html">Professor Jeffrey Fessler</a>
                        {'\u00a0'}researching and optimizing X-ray computed tomography on GPUs.
                        <br/><br/>
                        <div className="youtube">
                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/dtXgwHKnA8c" frameborder="0" allowfullscreen>
                            </iframe>
                        </div>
                        </p>
                        <br/>
                        <p>
                        I worked in Madrid at <a target="_blank" href="http://www.nuubo.com/">Nuubo</a>
                        {'\u00a0'}on a team building a wearable EKG.
                        <br/>
                        I focused on OpenCL GPU optimization.
                        </p>
                        <br/>
                        <p>
                        I studied Computer Engineering at the University of Michigan.
                        <br/>
                        I studied signal processing, embedded systems, machine learning, and computer vision.
                        <br/>
                        I built object trackers, panaroma stitchers, face recognition.
                        <br/>
                        I built language categorization, optical character recognition, and height map reconstruction.
                        <br/>
                        I implemented neural networks, collaborative filtering, and generative models.
                        <br/>
                        I built an embedded performance system with artifical intelligence, graphics, and real-time effects processing.
                        </p>
                        <br/>
                        <div className="youtube">
                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/lzsdMJA22CA?rel=0&showinfo=0&autohide=1" frameborder="0" allowfullscreen>
                            </iframe>
                        </div>
                        <br/>
                        <p>
                        My first software application was a music synthesizer and transcriber.
                        </p>
                        <br/>
                        <div className="youtube">
                            <iframe width="100%" height="100%"
                                src="https://www.youtube.com/embed/Hl607Lvl_D4?rel=0&showinfo=0&autohide=1&start=260" frameborder="0" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
var MainContainer = React.createClass({
    render: function() {
        return(
            <div className="mainContainer">
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
