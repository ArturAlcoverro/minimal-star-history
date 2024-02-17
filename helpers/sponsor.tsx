import { sampleSize } from "lodash"
import utils from "../common/utils"

interface Sponsor {
    // The name of the sponsor
    name: string
    // The logo of the sponsor and will be displayed in the right side section.
    logo: string
    // The landing image of the sponsor and will be displayed in the bottom side section.
    landingImage: string
    // The link of the sponsor.
    link: string
    // The slogan of the sponsor logo.
    logoSlogan: string
    // The slogan of the sponsor landing.
    landingSlogan: string
}

// The list of current sponsors.
const sponsors: Sponsor[] = [
    // {
    //   name: "Bytebase",
    //   logo: utils.absolutifyLink("/sponsors/bytebase/logo.webp"),
    //   landingImage: utils.absolutifyLink("/sponsors/bytebase/landing.webp"),
    //   link: "https://bytebase.com?utm_source=star-history",
    //   logoSlogan:
    //     "Bytebase: Database DevOps and CI/CD for MySQL, PG, Oracle, SQL Server, Snowflake, CK, Mongo, Redis",
    //   landingSlogan:
    //     "Database DevOps and CI/CD for MySQL, PG, Oracle, SQL Server, Snowflake, CK, Mongo, Redis",
    // },
    {
        name: "Dify",
        logo: utils.absolutifyLink("/sponsors/dify/logo.webp"),
        landingImage: utils.absolutifyLink("/sponsors/dify/landing.webp"),
        link: "https://dify.ai/?utm_source=star-history",
        logoSlogan: "Dify: The next-gen development platform. Create Assistants API and GPTs based on any LLMs.",
        landingSlogan: "The next-gen development platform. Create Assistants API and GPTs based on any LLMs."
    },
    {
        name: "AutoMQ",
        logo: utils.absolutifyLink("/sponsors/automq/logo.webp"),
        landingImage: utils.absolutifyLink("/sponsors/automq/landing.webp"),
        link: "https://github.com/AutoMQ/automq-for-kafka/?utm_source=star-history",
        logoSlogan: "AutoMQ: Truly serverless Kafka solution that maximizes the benefits of cloud.",
        landingSlogan: "Truly serverless Kafka solution that maximizes the benefits of cloud."
    },
    {
        name: "Argo CD vs. Flux",
        logo: utils.absolutifyLink("/sponsors/akuity/logo.webp"),
        landingImage: utils.absolutifyLink("/sponsors/akuity/landing.webp"),
        link: "https://hubs.li/Q02fpVR30",
        logoSlogan: "A legit and balanced comparison of top two GitOps tools. Choose Argo CD today for a better DevOps experience.",
        landingSlogan: "choose Argo CD for a better DevOps experience."
    }
]

export const randomSponsors = sampleSize(sponsors, sponsors.length)
