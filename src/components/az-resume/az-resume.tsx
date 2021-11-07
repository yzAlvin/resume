import { Component, h, Prop } from "@stencil/core";
import { Experience } from "../experience/experience";
@Component({
  tag: "az-resume",
  styleUrl: "az-resume.scss",
  shadow: true,
})
export class Resume {
  @Prop() showDownloadLink: boolean = false;

  calcYearsSince(dateString: string) {
    const date = new Date(dateString);
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <article class="resume">
        {this.showDownloadLink ? (
          <div class="download-pdf screen-only">
            <a href="https://github.com/yzalvin/resume/raw/master/Alvin%Zhao's%20Resume.pdf">
              Download as PDF
            </a>
          </div>
        ) : (
          ""
        )}
        <section class="name-and-contact">
          <div>
            <h1>Alvin Zhao</h1>
            <h5>Software Developer</h5>
          </div>
          <ul>
            {/* <li class="experience">
              <svg-icon name="experience"></svg-icon>
              <span>
              {this.calcYearsSince("2021-02-14")} years of experience
              </span>
            </li> */}
            <li class="location">
              <svg-icon name="location"></svg-icon>
              <span>Melbourne, VIC, Australia</span>
            </li>
            <li class="languages">
              <svg-icon name="languages"></svg-icon>
              <span>English, Teochew</span>
            </li>
            <li class="email">
              <svg-icon name="email"></svg-icon>
              <a href="mailto:alvin99yz@gmail.com">alvin99yz@gmail.com</a>
            </li>
            <li class="linkedin screen-only">
              <svg-icon name="linkedin"></svg-icon>
              <a href="https://www.linkedin.com/in/alvin-zhao/" target="_blank">
                LinkedIn Profile
              </a>
            </li>
            <li class="website">
              <svg-icon name="website"></svg-icon>
              <a href="https://yzalvin.github.io" target="_blank">
                yzalvin.github.io
              </a>
            </li>
            <li class="github screen-only">
              <svg-icon name="github"></svg-icon>
              <a href="https://github.com/yzAlvin" target="_blank">
                GitHub Profile
              </a>
            </li>
          </ul>
        </section>
        <section class="about">
          <p class="section-title">About</p>
          <p>
            I enjoy learning and building things. I have a passion for software
            development, and am able to work across all layers of software. I
            started writing scripts in primary school and have been coding ever
            since.
          </p>
        </section>
        <section class="work">
          <p class="section-title">Professional Experience</p>

          <div class="experiences-container">
            <Experience
              company="MYOB"
              jobTitle="Associate Developer"
              location="Cremorne, VIC"
              startDate="Hopefully soon"
              endDate="???"
            >
              <ul>
                <li>Thing 1;</li>
                <li>Thing 2;</li>
                <li>Thing 3;</li>
              </ul>
            </Experience>

            <Experience
              company="MYOB"
              jobTitle="Protege Developer"
              location="Cremorne, VIC"
              startDate="Feb 2021"
            >
              <ul>
                <li>Learning;</li>
                <li>Thing 2;</li>
                <li>Thing 3;</li>
              </ul>
            </Experience>
          </div>
        </section>
        <section class="education">
          <p class="section-title">Education</p>
          <p>
            <u>Bachelor of Computer Science (Advanced Computer Science)</u> from{" "}
            <i>Monash University</i>, 2021.
          </p>
          <p>
            <u>Certificate IV in Cyber Security</u> from{" "}
            <i>Holmesglen Institute</i>, 2021.
          </p>
        </section>
        <section class="skills">
          <p class="section-title">Skills</p>

          <ul>
            <li>
              Frontend
              <div class="tags-container">
                <span class="tag">TypeScript</span>
                <span class="tag">JavaScript</span>
                <span class="tag">React</span>
              </div>
            </li>
            <li>
              Backend
              <div class="tags-container">
                <span class="tag secondary">C#</span>
                <span class="tag secondary">.NET</span>
                <span class="tag secondary">NodeJS</span>
                <span class="tag secondary">PostgreSQL</span>
              </div>
            </li>
            <li>
              Devops
              <div class="tags-container">
                <span class="tag">Buildkite</span>
                <span class="tag">Github Actions</span>
                <span class="tag">Docker</span>
                <span class="tag">AWS</span>
                <span class="tag">Kubernetes</span>
              </div>
            </li>
          </ul>
        </section>
      </article>
    );
  }
}
