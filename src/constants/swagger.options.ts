import fastifySwagger, { type SwaggerOptions } from "@fastify/swagger";
import fastifySwaggerUi, {
  type FastifySwaggerUiOptions,
} from "@fastify/swagger-ui";

const COMMON_SWAGGER_UI_OPTIONS: {
  routePrefix: string;
  uiConfig: {
    docExpansion: "full" | "list" | "none";
    deepLinking: boolean;
  };
} = {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "list",
    deepLinking: false,
  },
};

const SWAGGER_CONTACT = {
  email: "toprakerzurumluoglu@gmail.com",
  name: "Toprak ERZURUMLUOĞLU",
  url: "t.com",
};

const SWAGGER_INFO = {
  title: "Rest Service Example with Fastify",
  description: "description",
  termsOfService: "must be a url",
  contact: SWAGGER_CONTACT,
};

const SWAGGER_OPTIONS = {
  // info: SWAGGER_INFO,
  host: "localhost",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  basePath: "{{VERSION}}",
  tags: [] as { name: string; description: string }[],
};

const DOC_VERSIONS = [
  {
    version: "v1",
    tags: [
      {
        name: "users",
        description: "The end points are related with USER",
      },
      {
        name: "posts",
        description: "The end points are related with POST",
      },
    ],
  },
  {
    version: "v2",
    tags: [
      {
        name: "users",
        description: "The end points are related with USER",
      },
    ],
  },
];

const generateOptions = (
  docVersions: {
    version: string;
    tags: { name: string; description: string }[];
  }[]
): {
  fastifySwagger: any;
  fastifySwaggerUi: any;
  swaggerOptions: SwaggerOptions;
  swaggerUiOptions: FastifySwaggerUiOptions;
  version: string;
}[] => {
  return docVersions.map((docVersion) => {
    const { version, tags } = docVersion;
    const commonSwaggerUiOptions = {
      ...COMMON_SWAGGER_UI_OPTIONS,
      routePrefix: `/${version + COMMON_SWAGGER_UI_OPTIONS.routePrefix}`,
    };

    const info = {
      ...SWAGGER_INFO,
      version,
    };

    const swaggerOptions: SwaggerOptions = {
      swagger: {
        ...SWAGGER_OPTIONS,
        basePath: version,
        info,
        tags,
      },
    };
    const swaggerUiOptions: FastifySwaggerUiOptions = {
      ...commonSwaggerUiOptions,
    };
    return {
      fastifySwagger,
      fastifySwaggerUi,
      swaggerOptions,
      swaggerUiOptions,
      version,
    };
  });
};

export const getGeneratedOptions = () => generateOptions(DOC_VERSIONS);
