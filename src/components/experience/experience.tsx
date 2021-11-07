import { FunctionalComponent, h } from "@stencil/core";

interface ExperienceProps {
  company: string;
  jobTitle: string;
  location: string;
  startDate: string;
  endDate?: string;
}

export const Experience: FunctionalComponent<ExperienceProps> = (
  { company, jobTitle, location, startDate, endDate },
  children
) => (
  <div class="experience">
    <div class="title">
      <div>
        <span class="company-name">{company}</span>
      </div>
      <small>
        {jobTitle} | <svg-icon name="location" small={true}></svg-icon>{" "}
        {location} | {startDate} ~ {endDate || "Now"}
      </small>
    </div>
    {children}
  </div>
);
