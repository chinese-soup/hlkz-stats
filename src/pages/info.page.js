import ServerList from "../components/servers";

function Info() {
  return (
    <div className="section" id="info">
      <div className="container">
        <div className="two-thirds column">
          <h3 className="section-heading">Half-Life Kreedz</h3>
          <p className="section-content">
            Half-Life Kreedz is a gamemode based on beating skill jump maps as
            fast as possible. This website provides statistics on the gamemode's
            players and maps from the SourceRuns Jump/Climb servers.
            <br /> <br />
            To play it, you need to have a Half-Life mod{" "}
            <a href="https://openag.pro/">Adrenaline Gamer</a>.
            <br /> <br />
            <h5>Servers:</h5>
            <ServerList />
            <br /> <br />
            Website made by{" "}
            <a href="https://steamcommunity.com/id/execut4ble">
              execut4ble
            </a>{" "}
            with the help of <a href="https://bitbucket.org/Sikarii/">Sikari</a>
            , <a href="https://github.com/EchoFrost">EchoFrost</a> and{" "}
            <a href="https://steamcommunity.com/id/sfgnaz/">naz</a>. ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
