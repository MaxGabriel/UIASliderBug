//
//  ViewController.m
//  TestSlider
//
//  Created by Maximilian Tagher on 4/27/14.
//  Copyright (c) 2014 Tagher. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@property (weak, nonatomic) IBOutlet UISlider *slider;

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    self.slider.accessibilityLabel = @"aSlider";
}

@end
