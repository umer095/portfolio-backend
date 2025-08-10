import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class CmsPortfolioApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // ✅ 1. Use custom request/response sequence
    this.sequence(MySequence);

    // ✅ 2. Serve static files from /public
    this.static('/', path.join(__dirname, '../public'));

    // ✅ 3. Configure API Explorer (UI at /explorer)
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    // ✅ 4. Define project root path
    this.projectRoot = __dirname;

    // ✅ 5. Configure controller auto-loader
    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],         // Folder to look for controllers
        extensions: ['.controller.js'], // Only files ending with this will be used
        nested: true,                  // Allow subfolder controllers
      },
    };
  }
}
