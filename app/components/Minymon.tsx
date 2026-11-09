import Script from "next/script";

const MINYMON_HTML = `
<div style="position:relative;z-index:2147483647">
  <minymon-body enableFeed="true" enableTalk="true" idsString="MWFkZmVkMjctYmM0Ny00ZjgyLWEwMGQtYjI2ODUyOWUzY2JkLkZaakZiM2F3WjVPTlpaY2hCSjkzeg==" infoTitle="Hi there!" theme="red">
    <minymon-question question="What are you currently working on?" theme="red">
      <minymon-answer answer="Right now I’m working toward my Bachelor’s degree in Data Analytics, and I’m rebuilding this portfolio to show how my UX and data skills fit together!" question="What are you currently working on?" theme="red">
      </minymon-answer>
    </minymon-question>
    <minymon-question question="What are your goals for the future?" theme="red">
      <minymon-answer answer="I’d like to grow into a Product or Data Analyst role where I can use both my design background and my analytics training. I love understanding how people use things and turning that into better decisions. I’m also open to UX research, since it combines the parts of my work that I enjoy most." question="What are your goals for the future?" theme="red">
      </minymon-answer>
    </minymon-question>
    <minymon-question question="Why is this cat here?" theme="red">
      <minymon-answer answer="It’s my portfolio’s unofficial mascot. It’s here because I think work should be fun to look at, and because it needs a job." question="Why is this cat here?" theme="red">
      </minymon-answer>
    </minymon-question>
    <minymon-feedback description="Send a message to Autumn!" mid="1adfed27-bc47-4f82-a00d-b268529e3cbd" theme="red" uid="FZjFb3awZ5ONZZchBJ93z">
    </minymon-feedback>
    <minymon-music src="https://firebasestorage.googleapis.com/v0/b/minymon-d541f.appspot.com/o/users%2FFZjFb3awZ5ONZZchBJ93z%2F1adfed27-bc47-4f82-a00d-b268529e3cbd%2FthemeSong?alt=media&token=7cafc3ac-9fb0-4ac5-b5a2-aabdf0a7df0e" theme="red">
    </minymon-music>
    <minymon-dialog dialog="%5B%7B%22id%22%3A%22oKbQZaPbCh6j_A3YqvNXi%22%2C%22prompt%22%3A%22Quick%20question%3A%20are%20you%20here%20for%20design%2C%20data%2C%20or%20coffee%3F%22%2C%22responses%22%3A%5B%7B%22id%22%3A%22sgKeqWtK1Gvo2hxtGEPke%22%2C%22response%22%3A%22Design%22%2C%22nextPromptId%22%3A%22aoGk37L-FPnNZGs_Nd2ta%22%7D%2C%7B%22id%22%3A%2262_umzU7GtNoUjjznNI_t%22%2C%22response%22%3A%22Data%22%2C%22nextPromptId%22%3A%22qCs9GYEjYT5kabxFzZK1u%22%7D%2C%7B%22id%22%3A%22dvTVyRIDC3oLKc-KFn6Zd%22%2C%22response%22%3A%22Coffee%22%2C%22nextPromptId%22%3A%22SHWiInIjWapj24u7LZsKH%22%7D%5D%7D%2C%7B%22id%22%3A%22aoGk37L-FPnNZGs_Nd2ta%22%2C%22prompt%22%3A%22Great%20taste%21%20Ask%20me%20about%20Game%20Library.%20I%20spent%20weeks%20making%20retro%20look%20usable.%22%2C%22responses%22%3A%5B%7B%22id%22%3A%22HgXOqjzKMnDQT9JNzwYkp%22%2C%22response%22%3A%22Why%20retro%3F%22%2C%22nextPromptId%22%3A%22oY48v1_Sj4Jr463uuWFCz%22%7D%5D%7D%2C%7B%22id%22%3A%22qCs9GYEjYT5kabxFzZK1u%22%2C%22prompt%22%3A%22A%20fellow%20nerd%21%20Data%20is%20just%20loot.%20You%20grind%20through%20it%2C%20find%20the%20rare%20drops%2C%20and%20level%20up%20your%20design.%22%2C%22responses%22%3A%5B%7B%22id%22%3A%223KeCzi0JdwS__NxTbaMd_%22%2C%22response%22%3A%22Do%20you%20work%20with%20data%20a%20lot%3F%22%2C%22nextPromptId%22%3A%22X-76e4ydiUgHMpoyOs4c7%22%7D%5D%7D%2C%7B%22id%22%3A%22SHWiInIjWapj24u7LZsKH%22%2C%22prompt%22%3A%22Wrong%20portfolio%2C%20right%20person.%20I%u2019ve%20been%20a%20barista%20in%20specialty%20coffee%20for%20years.%20My%20go-to%20is%20a%20maple%20cinnamon%20latte.%22%2C%22responses%22%3A%5B%7B%22id%22%3A%22mtvB1WQ87dI0wRQA58K8w%22%2C%22response%22%3A%22Does%20your%20barista%20experience%20help%20with%20design%3F%22%2C%22nextPromptId%22%3A%22gPx1kJHcWw9bggXbfTAq4%22%7D%5D%7D%2C%7B%22id%22%3A%22oY48v1_Sj4Jr463uuWFCz%22%2C%22prompt%22%3A%22Early%202000s%20websites%20had%20so%20much%20personality.%20The%20challenge%20was%20keeping%20that%20charm%20while%20making%20everything%20easy%20to%20use.%22%2C%22responses%22%3A%5B%7B%22id%22%3A%22BzsIT9yUWrvnCx03cdOWe%22%2C%22response%22%3A%22Ask%20something%20else%22%2C%22nextPromptId%22%3A%22oKbQZaPbCh6j_A3YqvNXi%22%7D%5D%7D%2C%7B%22id%22%3A%22X-76e4ydiUgHMpoyOs4c7%22%2C%22prompt%22%3A%22I%u2019m%20studying%20Data%20Analytics%20right%20now%2C%20so%20soon%20I%u2019ll%20be%20farming%20it%20daily.%20I%20love%20finding%20the%20story%20hiding%20in%20the%20numbers.%22%2C%22responses%22%3A%5B%7B%22id%22%3A%22zwJbattvllbuwbV6KkbaS%22%2C%22response%22%3A%22Ask%20something%20else%22%2C%22nextPromptId%22%3A%22oKbQZaPbCh6j_A3YqvNXi%22%7D%5D%7D%2C%7B%22id%22%3A%22gPx1kJHcWw9bggXbfTAq4%22%2C%22prompt%22%3A%22More%20than%20you%u2019d%20think%21%20Serving%20customers%20taught%20me%20to%20listen%2C%20stay%20calm%2C%20and%20design%20for%20the%20person%20in%20front%20of%20me.%22%2C%22responses%22%3A%5B%7B%22id%22%3A%22oqM1HYXGqQj7E2kVSBZYX%22%2C%22response%22%3A%22Ask%20something%20else%22%2C%22nextPromptId%22%3A%22oKbQZaPbCh6j_A3YqvNXi%22%7D%5D%7D%5D" theme="red">
    </minymon-dialog>
  </minymon-body>
</div>
`;

export default function Minymon() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie_svg.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://api.minymon.com/minymon.js"
        strategy="afterInteractive"
      />
      <div dangerouslySetInnerHTML={{ __html: MINYMON_HTML }} />
    </>
  );
}
