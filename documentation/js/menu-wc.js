'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">onestop-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-6897a0ba154cfec5bacb5ad954e3715dc643ce3ab55adbe402dc5e5654c5d5fc618bc0d5d094d77cb88b4f08a219c68471f42bfdae3570df138bfaf5eda6d286"' : 'data-bs-target="#xs-components-links-module-AppModule-6897a0ba154cfec5bacb5ad954e3715dc643ce3ab55adbe402dc5e5654c5d5fc618bc0d5d094d77cb88b4f08a219c68471f42bfdae3570df138bfaf5eda6d286"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6897a0ba154cfec5bacb5ad954e3715dc643ce3ab55adbe402dc5e5654c5d5fc618bc0d5d094d77cb88b4f08a219c68471f42bfdae3570df138bfaf5eda6d286"' :
                                            'id="xs-components-links-module-AppModule-6897a0ba154cfec5bacb5ad954e3715dc643ce3ab55adbe402dc5e5654c5d5fc618bc0d5d094d77cb88b4f08a219c68471f42bfdae3570df138bfaf5eda6d286"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BillComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FamilyMemberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FamilyMemberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvoiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnauthorizedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UnauthorizedComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/newUser.html" data-type="entity-link" >newUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BillService.html" data-type="entity-link" >BillService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CollectionService.html" data-type="entity-link" >CollectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link" >HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InvoiceService.html" data-type="entity-link" >InvoiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegisterService.html" data-type="entity-link" >RegisterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionService.html" data-type="entity-link" >SubscriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserFamilyService.html" data-type="entity-link" >UserFamilyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStatusService.html" data-type="entity-link" >UserStatusService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpInterceptorService.html" data-type="entity-link" >HttpInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BillingDTO.html" data-type="entity-link" >BillingDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CollectionDTO.html" data-type="entity-link" >CollectionDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InvoiceDTO.html" data-type="entity-link" >InvoiceDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InvoiceIdDTO.html" data-type="entity-link" >InvoiceIdDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NameAndPhone.html" data-type="entity-link" >NameAndPhone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewMemberDTO.html" data-type="entity-link" >NewMemberDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OttDTO.html" data-type="entity-link" >OttDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlanDTO.html" data-type="entity-link" >PlanDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlanIdDTO.html" data-type="entity-link" >PlanIdDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubscriptionDTO.html" data-type="entity-link" >SubscriptionDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});