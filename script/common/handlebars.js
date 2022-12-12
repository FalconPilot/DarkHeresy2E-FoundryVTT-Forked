export const initializeHandlebars = () => {
  registerHandlebarsHelpers();
  preloadHandlebarsTemplates();
};

function preloadHandlebarsTemplates() {
  const templatePaths = [
    "systems/dark-heresy-forked/template/sheet/actor/acolyte.html",
    "systems/dark-heresy-forked/template/sheet/actor/npc.html",
    "systems/dark-heresy-forked/template/sheet/actor/limited-sheet.html",

    "systems/dark-heresy-forked/template/sheet/actor/tab/abilities.html",
    "systems/dark-heresy-forked/template/sheet/actor/tab/combat.html",
    "systems/dark-heresy-forked/template/sheet/actor/tab/gear.html",
    "systems/dark-heresy-forked/template/sheet/actor/tab/notes.html",
    "systems/dark-heresy-forked/template/sheet/actor/tab/npc-notes.html",
    "systems/dark-heresy-forked/template/sheet/actor/tab/npc-stats.html",
    "systems/dark-heresy-forked/template/sheet/actor/tab/progression.html",
    "systems/dark-heresy-forked/template/sheet/actor/tab/psychic-powers.html",
    "systems/dark-heresy-forked/template/sheet/actor/tab/stats.html",

    "systems/dark-heresy-forked/template/sheet/mental-disorder.html",
    "systems/dark-heresy-forked/template/sheet/aptitude.html",
    "systems/dark-heresy-forked/template/sheet/malignancy.html",
    "systems/dark-heresy-forked/template/sheet/mutation.html",
    "systems/dark-heresy-forked/template/sheet/talent.html",
    "systems/dark-heresy-forked/template/sheet/trait.html",
    "systems/dark-heresy-forked/template/sheet/special-ability.html",
    "systems/dark-heresy-forked/template/sheet/psychic-power.html",
    "systems/dark-heresy-forked/template/sheet/critical-injury.html",
    "systems/dark-heresy-forked/template/sheet/weapon.html",
    "systems/dark-heresy-forked/template/sheet/armour.html",
    "systems/dark-heresy-forked/template/sheet/gear.html",
    "systems/dark-heresy-forked/template/sheet/drug.html",
    "systems/dark-heresy-forked/template/sheet/tool.html",
    "systems/dark-heresy-forked/template/sheet/cybernetic.html",
    "systems/dark-heresy-forked/template/sheet/weapon-modification.html",
    "systems/dark-heresy-forked/template/sheet/ammunition.html",
    "systems/dark-heresy-forked/template/sheet/force-field.html",
    "systems/dark-heresy-forked/template/sheet/characteristics/information.html",
    "systems/dark-heresy-forked/template/sheet/characteristics/left.html",
    "systems/dark-heresy-forked/template/sheet/characteristics/name.html",
    "systems/dark-heresy-forked/template/sheet/characteristics/right.html",
    "systems/dark-heresy-forked/template/sheet/characteristics/total.html",
    "systems/dark-heresy-forked/template/chat/item.html",
    "systems/dark-heresy-forked/template/chat/roll.html",
    "systems/dark-heresy-forked/template/chat/critical.html",
    "systems/dark-heresy-forked/template/dialog/common-roll.html",
    "systems/dark-heresy-forked/template/dialog/combat-roll.html",
    "systems/dark-heresy-forked/template/dialog/psychic-power-roll.html"
  ];
  return loadTemplates(templatePaths);
}

function registerHandlebarsHelpers() {
  Handlebars.registerHelper("removeMarkup", function (text) {
    const markup = /<(.*?)>/gi;
    return text.replace(markup, "");
  })

  Handlebars.registerHelper("enrich", function (string) {
    return TextEditor.enrichHTML(string, {async: false})
  })

  Handlebars.registerHelper("damageTypeLong", function (damageType) {
    damageType = (damageType || "i").toLowerCase();
    switch (damageType) {
      case "e":
        return game.i18n.localize("DAMAGE_TYPE.ENERGY");
      case "i":
        return game.i18n.localize("DAMAGE_TYPE.IMPACT");
      case "r":
        return game.i18n.localize("DAMAGE_TYPE.RENDING");
      case "e":
        return game.i18n.localize("DAMAGE_TYPE.EXPLOSIVE");
      default:
        return game.i18n.localize("DAMAGE_TYPE.IMPACT");
    }
  });

}

