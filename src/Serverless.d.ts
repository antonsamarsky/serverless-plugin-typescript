declare namespace Serverless {
  interface Instance {
    cli: {
      log(str: string): void
    }

    config: {
      servicePath: string
    }

    service: {
      provider: {
        name: string
      }
      functions: {
        [key: string]: Serverless.Function
      }
      layers: { [key: string]: Serverless.Layer }
      package: Serverless.Package
      getAllFunctions(): string[]
      getAllLayers: () => string[]
    }

    pluginManager: PluginManager
  }

  interface Options {
    function?: string
    watch?: boolean
    extraServicePath?: string
  }

  interface Layer {
    handler: string
    package: Serverless.Package
  }

  interface Function {
    handler: string
    package: Serverless.Package
  }

  interface Package {
    include: string[]
    exclude: string[]
    artifact?: string
    individually?: boolean
  }

  interface PluginManager {
    spawn(command: string): Promise<void>
  }
}