class End extends Phaser.Scene {
    constructor() {
        super('End');

        this.LAYOUT_PORTRAIT = {
            all_peoples: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            blank_bg_for_use: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            counting_machine: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_1: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_2: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_3: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_4: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_5: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_6: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            download_button: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fall: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_1: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_2: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_3: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_4: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_5: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_6: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hand_pointer: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            iq_counter: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            main_theme: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            parking_points: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            parking: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_1_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_1: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_2_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_2: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_3_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_3: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_4_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_4: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_5_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_5: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_6_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_6: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            rettry: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            welcome_text: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
        };

        this.LAYOUT_LANDSCAPE = {
            all_peoples: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            blank_bg_for_use: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            counting_machine: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_1: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_2: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_3: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_4: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_5: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            craft_6: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            download_button: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fall: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_1: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_2: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_3: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_4: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_5: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            fighter_6: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            hand_pointer: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            iq_counter: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            main_theme: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            parking_points: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            parking: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_1_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_1: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_2_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_2: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_3_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_3: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_4_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_4: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_5_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_5: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_6_side: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            people_6: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            rettry: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
            welcome_text: { x: 0, y: 0, scale:1, alpha: 1, angle: 0, depth: 1 },
        };
    }

    create() {
        this.createEndUI();
        this.onOrientationChange();
        this.uiEditor = new UIEditor(this, {
            enabled: true,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'end.js'
        });
    }

    getEditorKeys() {
        return [
            'all_peoples',
            'blank_bg_for_use',
            'counting_machine',
            'craft_1',
            'craft_2',
            'craft_3',
            'craft_4',
            'craft_5',
            'craft_6',
            'download_button',
            'fall',
            'fighter_1',
            'fighter_2',
            'fighter_3',
            'fighter_4',
            'fighter_5',
            'fighter_6',
            'hand_pointer',
            'iq_counter',
            'main_theme',
            'parking_points',
            'parking',
            'people_1_side',
            'people_1',
            'people_2_side',
            'people_2',
            'people_3_side',
            'people_3',
            'people_4_side',
            'people_4',
            'people_5_side',
            'people_5',
            'people_6_side',
            'people_6',
            'rettry',
            'welcome_text',
        ];
    }

    createEndUI() {
        this.all_peoples = this.add.image(0, 0, 'all_peoples').setOrigin(0.5).setAlpha(0);
        this.blank_bg_for_use = this.add.image(0, 0, 'blank_bg_for_use').setOrigin(0.5).setAlpha(0);
        this.counting_machine = this.add.image(0, 0, 'counting_machine').setOrigin(0.5).setAlpha(0);
        this.craft_1 = this.add.image(0, 0, 'craft_1').setOrigin(0.5).setAlpha(0);
        this.craft_2 = this.add.image(0, 0, 'craft_2').setOrigin(0.5).setAlpha(0);
        this.craft_3 = this.add.image(0, 0, 'craft_3').setOrigin(0.5).setAlpha(0);
        this.craft_4 = this.add.image(0, 0, 'craft_4').setOrigin(0.5).setAlpha(0);
        this.craft_5 = this.add.image(0, 0, 'craft_5').setOrigin(0.5).setAlpha(0);
        this.craft_6 = this.add.image(0, 0, 'craft_6').setOrigin(0.5).setAlpha(0);
        this.download_button = this.add.image(0, 0, 'download_button').setOrigin(0.5).setAlpha(0);
        this.fall = this.add.image(0, 0, 'fall').setOrigin(0.5).setAlpha(0);
        this.fighter_1 = this.add.image(0, 0, 'fighter_1').setOrigin(0.5).setAlpha(0);
        this.fighter_2 = this.add.image(0, 0, 'fighter_2').setOrigin(0.5).setAlpha(0);
        this.fighter_3 = this.add.image(0, 0, 'fighter_3').setOrigin(0.5).setAlpha(0);
        this.fighter_4 = this.add.image(0, 0, 'fighter_4').setOrigin(0.5).setAlpha(0);
        this.fighter_5 = this.add.image(0, 0, 'fighter_5').setOrigin(0.5).setAlpha(0);
        this.fighter_6 = this.add.image(0, 0, 'fighter_6').setOrigin(0.5).setAlpha(0);
        this.hand_pointer = this.add.image(0, 0, 'hand_pointer').setOrigin(0.5).setAlpha(0);
        this.iq_counter = this.add.image(0, 0, 'iq_counter').setOrigin(0.5).setAlpha(0);
        this.main_theme = this.add.image(0, 0, 'main_theme').setOrigin(0.5).setAlpha(0);
        this.parking_points = this.add.image(0, 0, 'parking_points').setOrigin(0.5).setAlpha(0);
        this.parking = this.add.image(0, 0, 'parking').setOrigin(0.5).setAlpha(0);
        this.people_1_side = this.add.image(0, 0, 'people_1_side').setOrigin(0.5).setAlpha(0);
        this.people_1 = this.add.image(0, 0, 'people_1').setOrigin(0.5).setAlpha(0);
        this.people_2_side = this.add.image(0, 0, 'people_2_side').setOrigin(0.5).setAlpha(0);
        this.people_2 = this.add.image(0, 0, 'people_2').setOrigin(0.5).setAlpha(0);
        this.people_3_side = this.add.image(0, 0, 'people_3_side').setOrigin(0.5).setAlpha(0);
        this.people_3 = this.add.image(0, 0, 'people_3').setOrigin(0.5).setAlpha(0);
        this.people_4_side = this.add.image(0, 0, 'people_4_side').setOrigin(0.5).setAlpha(0);
        this.people_4 = this.add.image(0, 0, 'people_4').setOrigin(0.5).setAlpha(0);
        this.people_5_side = this.add.image(0, 0, 'people_5_side').setOrigin(0.5).setAlpha(0);
        this.people_5 = this.add.image(0, 0, 'people_5').setOrigin(0.5).setAlpha(0);
        this.people_6_side = this.add.image(0, 0, 'people_6_side').setOrigin(0.5).setAlpha(0);
        this.people_6 = this.add.image(0, 0, 'people_6').setOrigin(0.5).setAlpha(0);
        this.rettry = this.add.image(0, 0, 'rettry').setOrigin(0.5).setAlpha(0);
        this.welcome_text = this.add.image(0, 0, 'welcome_text').setOrigin(0.5).setAlpha(0);
    }

    onOrientationChange() {
        this.reflowForResize({ width: this.scale.width, height: this.scale.height });
        this.scale.on('resize', this.reflowForResize, this);
    }

    reflowForResize(gameSize = { width: this.scale.width, height: this.scale.height }) {
        const isLandscape = gameSize.width > gameSize.height;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;

        for (const key in layout) {
            if (this[key] && layout.hasOwnProperty(key)) {
                const { x, y, scale, alpha, depth, r } = layout[key];
                this[key].setPosition(x, y).setRotation(r || 0);
                if (scale) this[key].setScale(scale);
                if (alpha !== undefined) this[key].setAlpha(alpha);
                if (depth) this[key].setDepth(depth);
            }
        }
    }
}
