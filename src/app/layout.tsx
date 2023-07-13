import "./globals.css";
import { Inter } from "next/font/google";
import "../../public/css/bootstrap.css";
import "../../public/css/style.css";
// import "../../public/css/bootstrap-theme.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Werewolves",
  description: "Let's Play Some Werewolves",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="page-top" style={{ marginTop: "75px" }}>
        {children}
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header page-scroll">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">
                <img src="/images/title.png" alt="Sanza theme logo" />
              </a>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li>
                  <a className="page-scroll" href="#characters">
                    Characters
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#villagers">
                    Villagers
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#werewolves">
                    Werewolves
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#outsiders">
                    Outsiders
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="/game">
                    New Game
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header>
          <div className="container">
            <div className="slider-container">
              <div className="intro-text">
                <div className="intro-lead-in">Let's play some Werewolves!</div>
                <div className="intro-heading">
                  Look below to find your character
                </div>
                <a href="#characters" className="page-scroll btn btn-xl">
                  Characters
                </a>
              </div>
            </div>
          </div>
        </header>
        <section id="characters" className="dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>Characters</h2>
                  <p>
                    Click on the icon below to go directly to your character
                    group
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="mz-module-about">
                  <a href="#villagers">
                    <i className="fa fa-briefcase ot-circle"></i>
                  </a>
                  <h3>Villagers</h3>
                  <p></p>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="mz-module-about">
                  <a href="#werewolves">
                    <i className="fa fa-photo ot-circle"></i>
                  </a>
                  <h3>Werewolves</h3>
                  <p></p>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="mz-module-about">
                  <a href="#outsiders">
                    <i className="fa fa-camera-retro ot-circle"></i>
                  </a>
                  <h3>Outsiders</h3>
                  <p>The Vampire, The Angel, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="villagers">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>The Villagers</h2>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/Capitaine_4553.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Sheriff
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        The Sheriff is elected by the players before the first
                        night. The Sheriff's opinion counts twice in all
                        subsequent votes. In case of equality, the Sheriff takes
                        the final decision. If the Sheriff is killed, he/she
                        chooses their successor. There can be no more than one
                        Sheriff at a time. This card is also the only one that’s
                        not hidden from other players.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/Villageois_8889.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>The Simple Villager </h3>
                    <div
                      className="quoteright"
                      style={{ width: "100px" }}
                    ></div>
                    <ul>
                      <li>
                        This is the default card. A “simple” or “innocent”
                        villager sleeps through the whole night. His only means
                        of distinguishing his friends from his foes is to make
                        deductions from previous votes and suspicious behavior.
                        The game is sold with 13 cards of this type.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/Sorciere_1222.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>The Witch </h3>
                    <div
                      className="quoteright"
                      style={{ width: "100px" }}
                    ></div>
                    <ul>
                      <li>
                        Every night, the Witch wakes up after the werewolves.
                        She/He has two potions, one to heal and one to kill, but
                        can use each only once in the whole game. If the Witch
                        still has a healing potion, the Moderator shows The
                        Witch who was just attacked by the werewolves. They can
                        use their potions on any player, including themself. The
                        game is sold with a single card of this type.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/Chasseur_1773.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Vigilante{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        The Vigilante, filled with rage at the werewolves,
                        decides to take justice into their own hands. Every
                        night the vigilante can wake up and decide to kill one
                        person.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/Cupidon_8618.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      Cupid / The Lovers{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        During the first night, the Cupid chooses two players
                        and then goes back to sleep. The Moderator wakes up the
                        two players, who become secret lovers.
                      </li>{" "}
                      <li>If one lover dies, so does the other.</li>{" "}
                      <li>
                        If both lovers are villagers, they win normally with the
                        other villagers. If both lovers are werewolves, they win
                        normally with the other werewolves. If the Lovers are a
                        villager and a werewolf, they form a third team and have
                        to outlive everybody else to win. The Cupid wins with
                        the villagers (unless he chose himself and a werewolf).
                        The game is sold with a single card of this type.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/idiot_16.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Village Idiot{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        The Village Idiot avoids public execution at the last
                        moment, by proving to be so stupid that it earns him or
                        her the village's pity. But once a player is known as
                        the Village Idiot, he or she can no longer participate
                        during debates and votes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/ancien_1103.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Elder{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        Old-timers are hard to kill. Werewolves need two tries
                        to devour this one. But should the Elder be executed,
                        all the villagers would lose the special powers they
                        had.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/salvateur_7023.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Defender{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        Can protect one player from a possible werewolf attack
                        each night, including oneself, but can not protect the
                        same player two nights in a row.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/TwoSisters.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Psychic Sisters{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        The Psychic Sisters wake up every night and point to
                        someone to ask if they are a Werewolf or a Vampire, the
                        moderator indicates whether they are or not. Like it is
                        for the Gypsy, Dracula appears to the sisters as though
                        he (or she) is a villager.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/ThreeBrothers.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Three Brothers{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        The Three Brothers wake up on the first night. This
                        allows them a slight information advantage in that they
                        know other villagers.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/KnightRusty.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Knight With The Rusty Sword{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        When the knight is killed by the Werewolves, the
                        werewolf to his/her left is infected. The infected
                        werewolf will survive for a day, but will die after the
                        next night.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/Collector.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Collector
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        The Collector is a potentially very powerful being. When
                        a villager with a special ability dies, The Collector
                        gets that character's special ability.
                      </li>
                      <li>
                        Because The Collector can amass multiple special
                        abilities (except for the angel), he/she becomes
                        incredibly powerful for the village.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/Actor.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Actor{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        The Angel has come to town to attempt to protect the
                        Villagers.
                      </li>{" "}
                      <li>
                        When the angel is killed, they transfer their spirit
                        into a dead villager and that person comes back into the
                        game. However, a revived character is still recovering
                        from death and can only speak through writing one letter
                        per night (this can not be the initials of one of the
                        werewolves).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </section>
        <section id="werewolves" className="light-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>The Werewolves</h2>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/LoupGarou_321.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Werewolf
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        Our main villain. The werewolves recognize each other
                        during the first night. They devour a villager every
                        night, and vote every day (while pretending to be
                        villagers). While a werewolf can’t eat another werewolf,
                        he can accuse and/or vote against one to When choosing
                        their victim of the night, the werewolves must be
                        unanimous, while other votes only require a majority.
                        The game is sold with 4 cards of this type.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/LoupBlanc_3487.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The White Werewolf{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        Plays mostly like a regular werewolf. However, every two
                        nights, the White Werewolf wakes up a second time for a
                        lone hunt, during which he or she can choose to devour a
                        werewolf. The White Werewolf wins when every other
                        player is dead. The game is sold with a single card of
                        this type.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/BigBadWolf.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>The Big Bad Wolf </h3>
                    <div
                      className="quoteright"
                      style={{ width: "100px" }}
                    ></div>
                    <ul>
                      <li>
                        Every night, after the werewolves have eaten, the Big
                        Bad Wolf wakes up and can choose a victim of their own.{" "}
                        <strong>
                          The Big Bad Wolf has this power only as long as no
                          werewolves have been killed.
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/WolfFather.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Accursed Wolf-Father
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        Each night the The Accursed Wolf-Father wakes up and
                        devours with the other Werewolves, but once per game,
                        after the other Wolves have gone back to sleep, The
                        Accursed Wolf-Father can turn a villager into a
                        Werewolf.
                      </li>{" "}
                      <li>
                        After the Werewolves have chosen a victim and gone to
                        sleep, he or she raises their hand, which means that the
                        victim just devoured by the Wolves has been turned into
                        a Werewolf. The Moderator will tap the victim three
                        times to alert them that they are now a werewolf.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/WildChild.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Wild Child
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <ul>
                      <li>
                        On the first night, The Wild Child chooses a role model.
                        If the role model dies during the game, the Wild Child
                        turns into a Werewolf and will devour with the
                        Werewolves every night after.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/WolfHound.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>The Wolf Hound/Dire Wolf</h3>
                    <div
                      className="quoteright"
                      style={{ width: "100px" }}
                    ></div>
                    <ul>
                      <li>
                        On the first night, this character decides whether they
                        want to join the Werewolves or not. If they decide not
                        to become a werewolf, then they become a Dire Wolf. The
                        Dire Wolf appears to the Werewolves to be one of them,
                        but secretly they are working for the village. Every
                        other night, after the werewolves have chosen their
                        victim, the Dire Wolf raises either their left or right
                        hand, indicating that they will kill the Werewolf to
                        their left or right. If they decide to be a werewolf,
                        being that the are a young, immature wolf hound, they
                        have to say the word "werewolf" at least once every day
                        in the town's debate.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="outsiders">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>The Outsiders</h2>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/Angel.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      The Angel{" "}
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <h4>Description:</h4>
                    <ul>
                      <li>
                        The Angel has come to town to attempt to protect the
                        Villagers.
                      </li>
                    </ul>{" "}
                    <h4>Attributes:</h4>
                    <ul>
                      <li>
                        <strong>
                          On the first night, the angel wakes up and finds out
                          who the werewolves are.
                        </strong>{" "}
                        However,{" "}
                        <strong>
                          the angel cannot say that they are the angel and
                          reveal the names of the werewolves
                        </strong>
                        , they have to do this by influencing the village to
                        vote out one of the werewolves each day.
                      </li>
                      <li>The angel cannot be the first person killed.</li>
                      <li>
                        When the angel is killed, they transfer their spirit
                        into a dead villager and that person comes back into the
                        game. However, a revived character is still recovering
                        from death and can only speak through writing one letter
                        per night (this can not be the initials of one of the
                        werewolves).
                      </li>{" "}
                      <li>
                        After three nights, the resurrected character is back to
                        full strength and, operating with all of the information
                        they learned while they were dead, can influence the
                        game and can vote in town votes. The werewolves can
                        choose to kill the resurrected person and, it is in
                        their best interest to do so, as that person can reveal
                        their identities once they are back to full strength.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/corbeau_1823.jpg"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>
                      Count/Countess Dracula
                      <div
                        className="quoteright"
                        style={{ width: "100px" }}
                      ></div>
                    </h3>
                    <h4>Description:</h4>
                    <ul>
                      <li>
                        Count(ess) Dracula has recently come to town with the
                        intention of killing off the werewolves and turning the
                        townsfolk into their vampire children.{" "}
                      </li>
                    </ul>
                    <h4>Attributes:</h4>
                    <ul>
                      <li>
                        Dracula wins the game when all of the werewolves have
                        been killed and the majority of remaining townspeople
                        are vampires.
                      </li>
                      <li>
                        Every night Dracula wakes up and can choose to turn a
                        townsperson into a vampire. The townsperson will be
                        tapped and will wake up to see the other vampires. The
                        newly turned vampire is protected from attacks by the
                        werewolves (both the collective werewolves and the Big
                        Bad Wolf) and from the vigilante for that night.
                      </li>
                      <li>
                        <strong>
                          Dracula can only be killed by the werewolves by being
                          attacked twice in the game, as Dracula is too strong
                          and the first attack will not work. Also, the attack
                          must be by the pack of wolves and cannot be by the Big
                          Bad Wolf
                        </strong>
                      </li>
                      <li>
                        However, Dracula can be killed by the town's vote and
                        subsequent staking. Also, the Witch can injure the
                        Vampire with the poison potion. Therefore, if the
                        Vampire has been poisoned by the Witch, one attack from
                        the wolves will kill Dracula.
                      </li>
                      <li>
                        Once a townsperson becomes a vampire, their entire goal
                        is for the vampires to win{" "}
                        <strong>and to protect Dracula in town votes</strong>{" "}
                        (even at their own expense -- if they sense Dracula is
                        in danger in the vote, they should try to put suspicion
                        on themselves or otherwise divert the vote).
                      </li>{" "}
                      <li>
                        If Dracula is killed, all child-vampires revert to being
                        townspeople. If the townsperson has a special ability,
                        they keep that ability while they are a vampire.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-item">
                  <div className="team-image">
                    <img
                      src="/images/characters/TheGypsy.png"
                      className="embeddedimage"
                      alt=""
                    />
                  </div>
                  <div className="team-text">
                    <h3>The Gypsy </h3>
                    <div
                      className="quoteright"
                      style={{ width: "100px" }}
                    ></div>
                    <h4>Description:</h4>
                    <ul>
                      <li>
                        The Gypsy is a seer who is on the side of the
                        Werewolves.{" "}
                      </li>
                    </ul>
                    <h4>Attributes:</h4>
                    <ul>
                      <li>
                        The Gypsy wakes up at night and asks the moderator if
                        one person is a Vampire or a Villager, but only sees
                        Dracula as a villager.
                      </li>
                      <li>The Gypsy wins with the Werewolves.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="dark-bg">
          <div className="container"></div>
        </section>
        <p id="back-top">
          <a href="#top">
            <i className="fa fa-angle-up"></i>
          </a>
        </p>
        <footer>
          <div className="container text-center">
            <p>
              Designed by{" "}
              <a href="https://moozthemes.com">
                <span>MOOZ</span>Themes.com
              </a>
            </p>
          </div>
        </footer>

        <div
          className="modal fade"
          id="Modal-1"
          role="dialog"
          aria-labelledby="Modal-label-1"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="Modal-label-1">
                  Dean & Letter
                </h4>
              </div>
              <div className="modal-body">
                <img
                  src="/images/demo/portfolio-1.jpg"
                  alt="img01"
                  className="img-responsive"
                />
                <div className="modal-works">
                  <span>Branding</span>
                  <span>Web Design</span>
                </div>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="Modal-2"
          role="dialog"
          aria-labelledby="Modal-label-2"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="Modal-label-2">
                  Startup Framework
                </h4>
              </div>
              <div className="modal-body">
                <img
                  src="/images/demo/portfolio-2.jpg"
                  alt="img01"
                  className="img-responsive"
                />
                <div className="modal-works">
                  <span>Branding</span>
                  <span>Web Design</span>
                </div>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="Modal-3"
          role="dialog"
          aria-labelledby="Modal-label-3"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="Modal-label-3">
                  Lamp & Velvet
                </h4>
              </div>
              <div className="modal-body">
                <img
                  src="/images/demo/portfolio-3.jpg"
                  alt="img01"
                  className="img-responsive"
                />
                <div className="modal-works">
                  <span>Branding</span>
                  <span>Web Design</span>
                </div>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="Modal-4"
          role="dialog"
          aria-labelledby="Modal-label-4"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="Modal-label-4">
                  Smart Name
                </h4>
              </div>
              <div className="modal-body">
                <img
                  src="/images/demo/portfolio-4.jpg"
                  alt="img01"
                  className="img-responsive"
                />
                <div className="modal-works">
                  <span>Branding</span>
                  <span>Web Design</span>
                </div>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="Modal-5"
          role="dialog"
          aria-labelledby="Modal-label-5"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="Modal-label-5">
                  Fast People
                </h4>
              </div>
              <div className="modal-body">
                <img
                  src="/images/demo/portfolio-5.jpg"
                  alt="img01"
                  className="img-responsive"
                />
                <div className="modal-works">
                  <span>Branding</span>
                  <span>Web Design</span>
                </div>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

const oldFunc = () => {
  return;
  <html lang="en">
    <body className={inter.className}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/game"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Games{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </body>
  </html>;
};
