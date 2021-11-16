import { h } from "@stencil/core";
import { Experience } from "../experience/experience";
export class Resume {
    constructor() {
        this.showDownloadLink = false;
    }
    calcYearsSince(dateString) {
        const date = new Date(dateString);
        const ageDifMs = Date.now() - date.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    render() {
        return (h("article", { class: "resume" },
            this.showDownloadLink ? (h("div", { class: "download-pdf screen-only" },
                h("a", { href: "https://github.com/yzalvin/resume/raw/master/Alvin%20Zhao's%20Resume.pdf" }, "Download as PDF"))) : (""),
            h("section", { class: "name-and-contact" },
                h("div", null,
                    h("h1", null, "Alvin Zhao"),
                    h("h5", null, "Software Developer")),
                h("ul", null,
                    h("li", { class: "location" },
                        h("svg-icon", { name: "location" }),
                        h("span", null, "Melbourne, VIC, Australia")),
                    h("li", { class: "languages" },
                        h("svg-icon", { name: "languages" }),
                        h("span", null, "English, Teochew")),
                    h("li", { class: "email" },
                        h("svg-icon", { name: "email" }),
                        h("a", { href: "mailto:alvin99yz@gmail.com" }, "alvin99yz@gmail.com")),
                    h("li", { class: "linkedin screen-only" },
                        h("svg-icon", { name: "linkedin" }),
                        h("a", { href: "https://www.linkedin.com/in/alvin-zhao/", target: "_blank" }, "LinkedIn Profile")),
                    h("li", { class: "website" },
                        h("svg-icon", { name: "website" }),
                        h("a", { href: "https://yzalv.in/", target: "_blank" }, "https://yzalv.in/")),
                    h("li", { class: "github screen-only" },
                        h("svg-icon", { name: "github" }),
                        h("a", { href: "https://github.com/yzAlvin", target: "_blank" }, "GitHub Profile")))),
            h("section", { class: "about" },
                h("p", { class: "section-title" }, "About"),
                h("p", null, "I enjoy learning and building things. I have a passion for software development, and am able to work across all layers of software. I started writing scripts in primary school and have been coding ever since.")),
            h("section", { class: "work" },
                h("p", { class: "section-title" }, "Professional Experience"),
                h("div", { class: "experiences-container" },
                    h(Experience, { company: "MYOB", jobTitle: "Associate Developer", location: "Cremorne, VIC", startDate: "Hopefully soon", endDate: "???" },
                        h("ul", null,
                            h("li", null, "Thing 1;"),
                            h("li", null, "Thing 2;"),
                            h("li", null, "Thing 3;"))),
                    h(Experience, { company: "MYOB", jobTitle: "Protege Developer", location: "Cremorne, VIC", startDate: "Feb 2021" },
                        h("ul", null,
                            h("li", null, "Learning;"),
                            h("li", null, "Thing 2;"),
                            h("li", null, "Thing 3;"))))),
            h("section", { class: "education" },
                h("p", { class: "section-title" }, "Education"),
                h("p", null,
                    h("u", null, "Bachelor of Computer Science (Advanced Computer Science)"),
                    " from",
                    " ",
                    h("i", null, "Monash University"),
                    ", 2021."),
                h("p", null,
                    h("u", null, "Certificate IV in Cyber Security"),
                    " from",
                    " ",
                    h("i", null, "Holmesglen Institute"),
                    ", 2021.")),
            h("section", { class: "skills" },
                h("p", { class: "section-title" }, "Skills"),
                h("ul", null,
                    h("li", null,
                        "Frontend",
                        h("div", { class: "tags-container" },
                            h("span", { class: "tag" }, "TypeScript"),
                            h("span", { class: "tag" }, "JavaScript"),
                            h("span", { class: "tag" }, "React"))),
                    h("li", null,
                        "Backend",
                        h("div", { class: "tags-container" },
                            h("span", { class: "tag secondary" }, "C#"),
                            h("span", { class: "tag secondary" }, ".NET"),
                            h("span", { class: "tag secondary" }, "NodeJS"),
                            h("span", { class: "tag secondary" }, "PostgreSQL"))),
                    h("li", null,
                        "Devops",
                        h("div", { class: "tags-container" },
                            h("span", { class: "tag" }, "Buildkite"),
                            h("span", { class: "tag" }, "Github Actions"),
                            h("span", { class: "tag" }, "Docker"),
                            h("span", { class: "tag" }, "AWS"),
                            h("span", { class: "tag" }, "Kubernetes")))))));
    }
    static get is() { return "az-resume"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["az-resume.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["az-resume.css"]
    }; }
    static get properties() { return {
        "showDownloadLink": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-download-link",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
