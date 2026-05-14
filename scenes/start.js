class Start extends Phaser.Scene {
    constructor() {
        super('Start');

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

    preload() {
        this.loadAllTheAssets();
    }

    create() {
        this.createUI();
        this.onOrientationChange();
        this.uiEditor = new UIEditor(this, {
            enabled: true,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'start.js'
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

    createUI() {
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

    loadAllTheAssets() {
        const assets = [
            { key: 'all_peoples', path: 'assets/All Peoples.png' },
            { key: 'blank_bg_for_use', path: 'assets/Blank BG for Use.png' },
            { key: 'counting_machine', path: 'assets/Counting Machine.png' },
            { key: 'craft_1', path: 'assets/Craft 1.png' },
            { key: 'craft_2', path: 'assets/Craft 2.png' },
            { key: 'craft_3', path: 'assets/Craft 3.png' },
            { key: 'craft_4', path: 'assets/Craft 4.png' },
            { key: 'craft_5', path: 'assets/Craft 5.png' },
            { key: 'craft_6', path: 'assets/Craft 6.png' },
            { key: 'download_button', path: 'assets/Download Button.png' },
            { key: 'fall', path: 'assets/Fall.png' },
            { key: 'fighter_1', path: 'assets/Fighter 1.png' },
            { key: 'fighter_2', path: 'assets/Fighter 2.png' },
            { key: 'fighter_3', path: 'assets/Fighter 3.png' },
            { key: 'fighter_4', path: 'assets/Fighter 4.png' },
            { key: 'fighter_5', path: 'assets/Fighter 5.png' },
            { key: 'fighter_6', path: 'assets/Fighter 6.png' },
            { key: 'hand_pointer', path: 'assets/Hand Pointer.png' },
            { key: 'iq_counter', path: 'assets/IQ counter.png' },
            { key: 'parking_points', path: 'assets/Parking points.png' },
            { key: 'parking', path: 'assets/Parking.png' },
            { key: 'people_1_side', path: 'assets/People 1 Side.png' },
            { key: 'people_1', path: 'assets/People 1.png' },
            { key: 'people_2_side', path: 'assets/People 2 Side.png' },
            { key: 'people_2', path: 'assets/People 2.png' },
            { key: 'people_3_side', path: 'assets/People 3 side.png' },
            { key: 'people_3', path: 'assets/People 3.png' },
            { key: 'people_4_side', path: 'assets/People 4 side.png' },
            { key: 'people_4', path: 'assets/People 4.png' },
            { key: 'people_5_side', path: 'assets/People 5 Side.png' },
            { key: 'people_5', path: 'assets/People 5.png' },
            { key: 'people_6_side', path: 'assets/People 6 Side.png' },
            { key: 'people_6', path: 'assets/People 6.png' },
            { key: 'rettry', path: 'assets/Rettry.png' },
            { key: 'welcome_text', path: 'assets/Welcome text.png' },
        ];

        const sfxs = [
            // No audio assets found
        ];

        for (const asset of assets) {
            this.load.image(asset.key, asset.path);
        }

        for (const sfx of sfxs) {
            this.load.audio(sfx.key, sfx.path);
        }
    }
}
