import { observable } from "mobx";

export default class SettingsStore {
  @observable
  private _expansionExpanded: string | false = false;
  get expansionExpanded(): string | false {
    return this._expansionExpanded;
  }
  set expansionExpanded(expansionExpanded: string | false) {
    this._expansionExpanded = expansionExpanded;
  }
}
