import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "svg-icon",
  styleUrl: "icon.scss",
  shadow: true
})
export class Icon {
  @Prop() name: string;
  @Prop() small: boolean;

  render() {
    return (
      <span class={this.small ? 'small' : ''}>
        {this.name == "birthday"
          ? (
            <svg viewBox="0 0 469.333 469.333"> <g> <g> <g> <path d="M234.56,128c23.573,0,42.667-19.093,42.667-42.667c0-8-2.24-15.573-6.08-21.973L234.56,0l-36.587,63.36 c-3.84,6.4-6.08,13.973-6.08,21.973C191.893,108.907,210.987,128,234.56,128z" /> <path d="M362.56,192L362.56,192H255.893v-42.667h-42.667V192H106.56c-35.307,0-64,28.693-64,64v32.853 c0,23.04,18.773,41.813,41.813,41.813c11.2,0,21.653-4.373,29.547-12.267l45.653-45.547l45.547,45.44 c15.787,15.787,43.307,15.787,59.093,0l45.653-45.44l45.547,45.44c7.893,7.893,18.347,12.267,29.547,12.267 c23.04,0,41.813-18.773,41.813-41.813V256C426.56,220.693,397.867,192,362.56,192z" /> <path d="M332.587,341.013L332.587,341.013l-22.933-22.933l-23.04,22.933c-27.84,27.84-76.48,27.84-104.32,0L159.36,318.08 l-23.04,22.933c-13.76,13.973-32.213,21.653-51.947,21.653c-15.467,0-29.867-4.907-41.813-13.12V448 c0,11.733,9.6,21.333,21.333,21.333h341.333c11.733,0,21.333-9.6,21.333-21.333v-98.453c-11.947,8.213-26.24,13.12-41.813,13.12 C365.013,362.667,346.56,354.987,332.587,341.013z" /> </g> </g> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg>
          )
          : this.name == "location"
          ? (
            <svg viewBox="0 0 430.114 430.114" > <g> <path id="Facebook_Places" d="M356.208,107.051c-1.531-5.738-4.64-11.852-6.94-17.205C321.746,23.704,261.611,0,213.055,0 C148.054,0,76.463,43.586,66.905,133.427v18.355c0,0.766,0.264,7.647,0.639,11.089c5.358,42.816,39.143,88.32,64.375,131.136 c27.146,45.873,55.314,90.999,83.221,136.106c17.208-29.436,34.354-59.259,51.17-87.933c4.583-8.415,9.903-16.825,14.491-24.857	c3.058-5.348,8.9-10.696,11.569-15.672c27.145-49.699,70.838-99.782,70.838-149.104v-20.262 C363.209,126.938,356.581,108.204,356.208,107.051z M214.245,199.193c-19.107,0-40.021-9.554-50.344-35.939 c-1.538-4.2-1.414-12.617-1.414-13.388v-11.852c0-33.636,28.56-48.932,53.406-48.932c30.588,0,54.245,24.472,54.245,55.06 C270.138,174.729,244.833,199.193,214.245,199.193z" /> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg>
          )          
          : this.name == "email"
          ? (
            <svg viewBox="0 0 511.626 511.626" > <g> <g> <path d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099			c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277			c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569			c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852			c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116			c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679			c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974			C26.169,159.743,37.307,170.736,49.106,178.729z" /> <path d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699			c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287			c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699			c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265			c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265			V184.437C503.441,193.569,493.927,201.854,483.072,209.275z" /> </g> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg>
          )
          : this.name == "linkedin"
          ? (
            <svg viewBox="0 0 430.117 430.118" > <g> <path id="LinkedIn__x28_alt_x29_" d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471		c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z		 M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563		c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z		 M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621		c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531		c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99		c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z" /> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg>
          )
          : this.name == "website"
          ? (
            <svg viewBox="0 0 512 512"><path d="m321.324219 83.367188c-12.8125-33.246094-28.917969-61.246094-47.425781-82.714844-6.078126-.429688-12.195313-.652344-18.34375-.652344-6.152344 0-12.269532.222656-18.34375.652344-18.511719 21.46875-34.617188 49.464844-47.425782 82.714844-4.136718 10.734374-7.855468 21.863281-11.15625 33.316406h153.851563c-3.304688-11.453125-7.023438-22.582032-11.15625-33.316406zm0 0"/><path d="m171.101562 365.316406h168.902344c6.457032-30.007812 10.207032-61.765625 11.089844-94.316406h-191.082031c.882812 32.554688 4.632812 64.308594 11.089843 94.316406zm0 0"/><path d="m340.003906 146.683594h-168.902344c-6.457031 30.007812-10.207031 61.765625-11.089843 94.316406h191.082031c-.882812-32.554688-4.632812-64.308594-11.089844-94.316406zm0 0"/><path d="m189.78125 428.632812c12.8125 33.246094 28.917969 61.246094 47.425781 82.714844 6.078125.429688 12.195313.652344 18.347657.652344 6.148437 0 12.265624-.222656 18.34375-.652344 18.507812-21.46875 34.613281-49.464844 47.421874-82.714844 4.136719-10.734374 7.855469-21.863281 11.15625-33.316406h-153.847656c3.300782 11.453125 7.019532 22.582032 11.152344 33.316406zm0 0"/><path d="m370.59375 146.683594c6.050781 29.953125 9.660156 61.664062 10.507812 94.316406h130.003907c-1.898438-33.089844-10.054688-65-23.929688-94.339844-.144531.003906-.285156.023438-.429687.023438zm0 0"/><path d="m140.515625 365.316406c-6.054687-29.953125-9.664063-61.664062-10.511719-94.316406h-130.003906c1.898438 33.089844 10.054688 65 23.929688 94.339844.144531-.003906.285156-.023438.429687-.023438zm0 0"/><path d="m363.554688 395.316406c-11.167969 41.644532-27.277344 78.976563-47.363282 109.484375 45.199219-10.929687 86.664063-34.066406 120.378906-67.78125 12.847657-12.847656 24.144532-26.828125 33.832032-41.703125zm0 0"/><path d="m147.550781 116.683594c11.171875-41.644532 27.277344-78.976563 47.363281-109.484375-45.195312 10.929687-86.664062 34.066406-120.382812 67.78125-12.84375 12.847656-24.140625 26.828125-33.828125 41.703125zm0 0"/><path d="m147.550781 395.316406h-106.847656c9.6875 14.875 20.984375 28.855469 33.828125 41.703125 33.71875 33.714844 75.183594 56.851563 120.378906 67.78125-20.082031-30.507812-36.1875-67.839843-47.359375-109.484375zm0 0"/><path d="m363.554688 116.683594h106.847656c-9.6875-14.875-20.980469-28.855469-33.828125-41.703125-33.71875-33.714844-75.183594-56.851563-120.382813-67.78125 20.085938 30.507812 36.195313 67.839843 47.363282 109.484375zm0 0"/><path d="m381.101562 271c-.847656 32.652344-4.453124 64.363281-10.507812 94.316406h116.152344c.144531 0 .285156.019532.429687.023438 13.875-29.339844 22.03125-61.25 23.929688-94.339844zm0 0"/><path d="m130.003906 241c.847656-32.652344 4.457032-64.363281 10.511719-94.316406h-116.15625c-.144531 0-.285156-.019532-.429687-.023438-13.875 29.339844-22.03125 61.25-23.929688 94.339844zm0 0"/></svg>
          )
          : this.name == "experience"
          ? (
            <svg viewBox="0 0 512.001 512.001"> <g> <g> <path d="M491.244,124.541h-83.027h-0.001l-387.459,0.025C9.292,124.566,0,133.858,0,145.321v276.733 c0,49.596,40.348,89.946,89.946,89.946h249.081c49.598,0,89.946-40.35,89.946-89.946v-83.027h62.27 c11.463,0,20.757-9.294,20.757-20.757V145.298C512,133.835,502.707,124.541,491.244,124.541z M153.055,345.107 c8.106,8.105,8.106,21.248,0,29.354c-4.052,4.053-9.364,6.08-14.676,6.08c-5.312,0-10.625-2.027-14.676-6.079l-41.513-41.514 c-8.106-8.105-8.106-21.248,0-29.354l41.513-41.514c8.105-8.105,21.248-8.105,29.354,0c8.106,8.105,8.106,21.248,0,29.354 l-26.837,26.836L153.055,345.107z M241.88,280.17l-13.838,83.027c-1.692,10.153-10.486,17.347-20.45,17.347 c-1.132,0-2.28-0.091-3.436-0.285c-11.308-1.885-18.947-12.579-17.062-23.887l13.838-83.027 c1.883-11.308,12.58-18.959,23.887-17.062C236.126,258.168,243.765,268.862,241.88,280.17z M346.785,332.947l-41.514,41.513 c-4.052,4.053-9.364,6.08-14.676,6.08s-10.625-2.027-14.676-6.079c-8.106-8.106-8.106-21.248,0-29.354l26.836-26.837 l-26.836-26.836c-8.106-8.105-8.106-21.248,0-29.354c8.105-8.105,21.248-8.105,29.354,0l41.513,41.514 C354.892,311.699,354.892,324.843,346.785,332.947z M470.487,297.514h-41.514V166.055h41.514V297.514z"/> </g> </g> <g> <g> <path d="M312.19,6.08c-8.105-8.106-21.248-8.106-29.354,0l-41.514,41.513c-8.106,8.105-8.106,21.248,0,29.354 c4.053,4.053,9.365,6.08,14.678,6.08c5.312,0,10.625-2.027,14.676-6.08l41.514-41.513C320.296,27.328,320.296,14.186,312.19,6.08z "/> </g> </g> <g> <g> <path d="M187.65,6.08c-8.105-8.106-21.248-8.106-29.354,0l-41.513,41.513c-8.106,8.105-8.106,21.248,0,29.354 c4.053,4.053,9.365,6.08,14.678,6.08c5.312,0,10.625-2.027,14.676-6.08l41.514-41.513C195.756,27.328,195.756,14.186,187.65,6.08z "/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
          )
          : this.name == "github"
          ? (
            <svg viewBox="0 0 24 24"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"/></svg>
          )
          : this.name == "languages"
          ? (
            <svg viewBox="0 0 472.615 472.615"> <g> <g> <path d="M236.308,40.759C105.799,40.759,0,117.58,0,212.342c0,53.876,34.198,101.952,87.693,133.409l-24.219,86.105 l114.219-53.252c18.742,3.473,38.381,5.319,58.614,5.319c130.509,0,236.308-76.82,236.308-171.581 C472.615,117.58,366.816,40.759,236.308,40.759z M120.701,243.495c-18.687,0-33.836-15.148-33.836-33.836 c0-18.686,15.149-33.835,33.836-33.835s33.836,15.149,33.836,33.835C154.537,228.347,139.388,243.495,120.701,243.495z M236.308,243.495c-18.687,0-33.836-15.148-33.836-33.836c0-18.686,15.149-33.835,33.836-33.835 c18.687,0,33.836,15.149,33.836,33.835C270.144,228.347,254.995,243.495,236.308,243.495z M351.914,243.495 c-18.687,0-33.836-15.148-33.836-33.836c0-18.686,15.149-33.835,33.836-33.835s33.836,15.149,33.836,33.835 C385.751,228.347,370.601,243.495,351.914,243.495z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
          )
          : ""}
      </span>
    );
  }
}
