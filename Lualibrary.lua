-- Lua Library - Simple GUI Creator
local LuaLibrary = {}

-- Color options
LuaLibrary.Colors = {
    Red = Color3.fromRGB(255, 50, 50),
    Green = Color3.fromRGB(50, 255, 50),
    Blue = Color3.fromRGB(50, 100, 255),
    Yellow = Color3.fromRGB(255, 255, 50),
    Purple = Color3.fromRGB(180, 50, 255),
    Orange = Color3.fromRGB(255, 150, 50),
    Pink = Color3.fromRGB(255, 100, 200),
    Dark = Color3.fromRGB(0, 0, 0)
}

-- Main function to create GUI
function LuaLibrary:CreateGUI(options)
    return self.CreateGUI(options)
end

function LuaLibrary.CreateGUI(options)
    options = options or {}
    
    -- Create instances
    local Library = Instance.new("ScreenGui")
    local Main = Instance.new("Frame")
    local UICorner = Instance.new("UICorner")
    local Title = Instance.new("TextLabel")
    local TextButton = Instance.new("TextButton")
    local UICorner_2 = Instance.new("UICorner")
    local TextButton_2 = Instance.new("TextButton")
    local UICorner_3 = Instance.new("UICorner")
    local TextBox = Instance.new("TextBox")

    -- Properties
    Library.Name = "Library"
    Library.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
    Library.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

    Main.Name = "Main"
    Main.Parent = Library
    Main.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    Main.BackgroundTransparency = 0.450
    Main.BorderColor3 = Color3.fromRGB(0, 0, 0)
    Main.BorderSizePixel = 0
    Main.Size = UDim2.new(0, 350, 0, 400) -- Increased size for more elements
    Main.Position = UDim2.new(0.5, -175, 0.5, -200)

    UICorner.CornerRadius = UDim.new(0, 5)
    UICorner.Parent = Main

    Title.Name = "Title"
    Title.Parent = Main
    Title.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
    Title.BackgroundTransparency = 1.000
    Title.BorderColor3 = Color3.fromRGB(0, 0, 0)
    Title.BorderSizePixel = 0
    Title.Position = UDim2.new(0.0180180185, 0, 0, 0)
    Title.Size = UDim2.new(0, 327, 0, 35)
    Title.Font = Enum.Font.SourceSans
    Title.Text = options.title or "TITLE"
    Title.TextColor3 = Color3.fromRGB(255, 255, 255)
    Title.TextSize = 28.000
    Title.TextXAlignment = Enum.TextXAlignment.Left

    -- Template elements
    TextButton.Parent = Main
    TextButton.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    TextButton.BackgroundTransparency = 0.450
    TextButton.BorderColor3 = Color3.fromRGB(0, 0, 0)
    TextButton.BorderSizePixel = 0
    TextButton.Position = UDim2.new(0.0180180185, 0, 0.216931224, 0)
    TextButton.Size = UDim2.new(0, 81, 0, 27)
    TextButton.Font = Enum.Font.SourceSans
    TextButton.Text = "Button 1"
    TextButton.TextColor3 = Color3.fromRGB(255, 255, 255)
    TextButton.TextSize = 14.000

    UICorner_2.CornerRadius = UDim.new(0, 5)
    UICorner_2.Parent = TextButton

    TextButton_2.Parent = Main
    TextButton_2.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    TextButton_2.BackgroundTransparency = 0.450
    TextButton_2.BorderColor3 = Color3.fromRGB(0, 0, 0)
    TextButton_2.BorderSizePixel = 0
    TextButton_2.Position = UDim2.new(0.0180180185, 0, 0.428571433, 0)
    TextButton_2.Size = UDim2.new(0, 81, 0, 27)
    TextButton_2.Font = Enum.Font.SourceSans
    TextButton_2.Text = "Button 2"
    TextButton_2.TextColor3 = Color3.fromRGB(255, 255, 255)
    TextButton_2.TextSize = 14.000

    UICorner_3.CornerRadius = UDim.new(0, 5)
    UICorner_3.Parent = TextButton_2

    TextBox.Parent = Main
    TextBox.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
    TextBox.BackgroundTransparency = 0.450
    TextBox.BorderColor3 = Color3.fromRGB(0, 0, 0)
    TextBox.BorderSizePixel = 0
    TextBox.Position = UDim2.new(0.321321309, 0, 0.216931224, 0)
    TextBox.Size = UDim2.new(0, 215, 0, 27) -- Smaller textbox
    TextBox.Font = Enum.Font.SourceSans
    TextBox.Text = ""
    TextBox.TextColor3 = Color3.fromRGB(255, 255, 255)
    TextBox.PlaceholderColor3 = Color3.fromRGB(150, 150, 150)
    TextBox.TextSize = 14.000
    
    -- Make the GUI draggable
    local dragging
    local dragInput
    local dragStart
    local startPos

    local function update(input)
        local delta = input.Position - dragStart
        Main.Position = UDim2.new(startPos.X.Scale, startPos.X.Offset + delta.X, startPos.Y.Scale, startPos.Y.Offset + delta.Y)
    end

    Main.InputBegan:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
            dragging = true
            dragStart = input.Position
            startPos = Main.Position
            
            input.Changed:Connect(function()
                if input.UserInputState == Enum.UserInputState.End then
                    dragging = false
                end
            end)
        end
    end)

    Main.InputChanged:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
            dragInput = input
        end
    end)

    game:GetService("UserInputService").InputChanged:Connect(function(input)
        if input == dragInput and dragging then
            update(input)
        end
    end)

    -- Track element positions
    local currentY = 0.216
    local yIncrement = 0.08
    
    -- Library functions
    local functions = {}
    
    function functions:Button(config)
        config = config or {}
        local button = TextButton:Clone()
        button.Parent = Main
        button.Text = config.text or "Button"
        button.Position = UDim2.new(0.018, 0, currentY, 0)
        
        button.MouseButton1Click:Connect(function()
            if config.click then
                config.click()
            end
        end)
        
        currentY = currentY + yIncrement
        
        return {
            SetText = function(newText)
                button.Text = newText
            end,
            SetVisible = function(visible)
                button.Visible = visible
            end
        }
    end
    
    function functions:TextBox(config)
        config = config or {}
        local textbox = TextBox:Clone()
        textbox.Parent = Main
        textbox.PlaceholderText = config.placeholder or "Type here..."
        textbox.Position = UDim2.new(0.321, 0, currentY, 0)
        textbox.Size = UDim2.new(0, 215, 0, 27)
        
        local textboxObj = {}
        
        if config.callback then
            textbox.FocusLost:Connect(function()
                config.callback(textbox.Text)
            end)
        end
        
        function textboxObj:GetText()
            return textbox.Text
        end
        
        function textboxObj:SetText(newText)
            textbox.Text = newText
        end
        
        function textboxObj:SetVisible(visible)
            textbox.Visible = visible
        end
        
        currentY = currentY + yIncrement
        return textboxObj
    end
    
    function functions:Label(text)
        local label = Title:Clone()
        label.Parent = Main
        label.Text = text
        label.Position = UDim2.new(0.018, 0, currentY, 0)
        label.Size = UDim2.new(0, 327, 0, 25)
        label.TextSize = 16
        
        currentY = currentY + yIncrement
        
        return {
            SetText = function(newText)
                label.Text = newText
            end,
            SetVisible = function(visible)
                label.Visible = visible
            end
        }
    end
    
    function functions:Slider(config)
        config = config or {}
        local range = config.range or {0, 100}
        local increment = config.increment or 1
        local defaultValue = config.default or range[1]
        local suffix = config.suffix or ""
        
        -- Create slider container
        local sliderFrame = Instance.new("Frame")
        local sliderBackground = Instance.new("Frame")
        local sliderProgress = Instance.new("Frame")
        local sliderButton = Instance.new("TextButton")
        local valueLabel = Instance.new("TextLabel")
        local titleLabel = Instance.new("TextLabel")
        local UICorner_Slider = Instance.new("UICorner")
        
        sliderFrame.Name = "SliderFrame"
        sliderFrame.Parent = Main
        sliderFrame.BackgroundTransparency = 1
        sliderFrame.Size = UDim2.new(1, -20, 0, 50)
        sliderFrame.Position = UDim2.new(0, 10, currentY, 0)
        
        titleLabel.Name = "Title"
        titleLabel.Parent = sliderFrame
        titleLabel.BackgroundTransparency = 1
        titleLabel.Size = UDim2.new(1, 0, 0, 20)
        titleLabel.Font = Enum.Font.SourceSans
        titleLabel.Text = config.text or "Slider"
        titleLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
        titleLabel.TextSize = 14
        titleLabel.TextXAlignment = Enum.TextXAlignment.Left
        
        sliderBackground.Name = "Background"
        sliderBackground.Parent = sliderFrame
        sliderBackground.BackgroundColor3 = Color3.fromRGB(60, 60, 60)
        sliderBackground.BorderSizePixel = 0
        sliderBackground.Position = UDim2.new(0, 0, 0, 25)
        sliderBackground.Size = UDim2.new(1, 0, 0, 10)
        
        UICorner_Slider.CornerRadius = UDim.new(0, 5)
        UICorner_Slider.Parent = sliderBackground
        
        sliderProgress.Name = "Progress"
        sliderProgress.Parent = sliderBackground
        sliderProgress.BackgroundColor3 = Color3.fromRGB(0, 120, 215)
        sliderProgress.BorderSizePixel = 0
        sliderProgress.Size = UDim2.new((defaultValue - range[1]) / (range[2] - range[1]), 0, 1, 0)
        
        sliderButton.Name = "SliderButton"
        sliderButton.Parent = sliderBackground
        sliderButton.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
        sliderButton.BorderSizePixel = 0
        sliderButton.Size = UDim2.new(0, 15, 2, 0)
        sliderButton.Position = UDim2.new((defaultValue - range[1]) / (range[2] - range[1]), -7, -0.5, 0)
        sliderButton.Text = ""
        
        valueLabel.Name = "Value"
        valueLabel.Parent = sliderFrame
        valueLabel.BackgroundTransparency = 1
        valueLabel.Size = UDim2.new(0, 60, 0, 20)
        valueLabel.Position = UDim2.new(1, -60, 0, 25)
        valueLabel.Font = Enum.Font.SourceSans
        valueLabel.Text = tostring(defaultValue) .. suffix
        valueLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
        valueLabel.TextSize = 14
        valueLabel.TextXAlignment = Enum.TextXAlignment.Right
        
        local isDragging = false
        local currentValue = defaultValue
        
        local function setValue(value)
            value = math.clamp(value, range[1], range[2])
            value = math.floor(value / increment + 0.5) * increment
            currentValue = value
            sliderProgress.Size = UDim2.new((value - range[1]) / (range[2] - range[1]), 0, 1, 0)
            sliderButton.Position = UDim2.new((value - range[1]) / (range[2] - range[1]), -7, -0.5, 0)
            valueLabel.Text = tostring(value) .. suffix
            
            if config.callback then
                config.callback(value)
            end
        end
        
        sliderButton.MouseButton1Down:Connect(function()
            isDragging = true
        end)
        
        game:GetService("UserInputService").InputEnded:Connect(function(input)
            if input.UserInputType == Enum.UserInputType.MouseButton1 then
                isDragging = false
            end
        end)
        
        sliderBackground.MouseButton1Down:Connect(function(x, y)
            local percent = (x - sliderBackground.AbsolutePosition.X) / sliderBackground.AbsoluteSize.X
            local value = range[1] + (percent * (range[2] - range[1]))
            setValue(value)
        end)
        
        game:GetService("RunService").RenderStepped:Connect(function()
            if isDragging then
                local mouse = game:GetService("Players").LocalPlayer:GetMouse()
                local percent = (mouse.X - sliderBackground.AbsolutePosition.X) / sliderBackground.AbsoluteSize.X
                local value = range[1] + (percent * (range[2] - range[1]))
                setValue(value)
            end
        end)
        
        currentY = currentY + 0.12
        
        return {
            SetValue = function(value)
                setValue(value)
            end,
            GetValue = function()
                return currentValue
            end,
            SetVisible = function(visible)
                sliderFrame.Visible = visible
            end
        }
    end
    
    function functions:Toggle(config)
        config = config or {}
        local defaultValue = config.default or false
        
        local toggleFrame = Instance.new("Frame")
        local toggleButton = Instance.new("TextButton")
        local toggleLabel = Instance.new("TextLabel")
        local toggleState = Instance.new("Frame")
        local UICorner_Toggle = Instance.new("UICorner")
        
        toggleFrame.Name = "ToggleFrame"
        toggleFrame.Parent = Main
        toggleFrame.BackgroundTransparency = 1
        toggleFrame.Size = UDim2.new(1, -20, 0, 30)
        toggleFrame.Position = UDim2.new(0, 10, currentY, 0)
        
        toggleLabel.Name = "Label"
        toggleLabel.Parent = toggleFrame
        toggleLabel.BackgroundTransparency = 1
        toggleLabel.Size = UDim2.new(1, -40, 1, 0)
        toggleLabel.Font = Enum.Font.SourceSans
        toggleLabel.Text = config.text or "Toggle"
        toggleLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
        toggleLabel.TextSize = 14
        toggleLabel.TextXAlignment = Enum.TextXAlignment.Left
        
        toggleButton.Name = "Toggle"
        toggleButton.Parent = toggleFrame
        toggleButton.BackgroundColor3 = Color3.fromRGB(60, 60, 60)
        toggleButton.BorderSizePixel = 0
        toggleButton.Size = UDim2.new(0, 40, 0, 20)
        toggleButton.Position = UDim2.new(1, -40, 0.5, -10)
        toggleButton.Text = ""
        
        UICorner_Toggle.CornerRadius = UDim.new(0, 10)
        UICorner_Toggle.Parent = toggleButton
        
        toggleState.Name = "State"
        toggleState.Parent = toggleButton
        toggleState.BackgroundColor3 = defaultValue and Color3.fromRGB(0, 200, 0) or Color3.fromRGB(100, 100, 100)
        toggleState.BorderSizePixel = 0
        toggleState.Size = UDim2.new(0, 16, 0, 16)
        toggleState.Position = UDim2.new(defaultValue and 0.5 or 0, 2, 0.5, -8)
        
        local toggleCorner = Instance.new("UICorner")
        toggleCorner.CornerRadius = UDim.new(0, 8)
        toggleCorner.Parent = toggleState
        
        local currentState = defaultValue
        
        local function setState(state)
            currentState = state
            if state then
                toggleState.BackgroundColor3 = Color3.fromRGB(0, 200, 0)
                toggleState.Position = UDim2.new(0.5, 2, 0.5, -8)
            else
                toggleState.BackgroundColor3 = Color3.fromRGB(100, 100, 100)
                toggleState.Position = UDim2.new(0, 2, 0.5, -8)
            end
            
            if config.callback then
                config.callback(state)
            end
        end
        
        toggleButton.MouseButton1Click:Connect(function()
            setState(not currentState)
        end)
        
        currentY = currentY + yIncrement
        
        return {
            SetValue = function(state)
                setState(state)
            end,
            GetValue = function()
                return currentState
            end,
            SetVisible = function(visible)
                toggleFrame.Visible = visible
            end
        }
    end
    
    function functions:Dropdown(config)
        config = config or {}
        local options = config.options or {"Option 1", "Option 2"}
        local defaultOption = config.default or options[1]
        
        local dropdownFrame = Instance.new("Frame")
        local dropdownButton = Instance.new("TextButton")
        local dropdownLabel = Instance.new("TextLabel")
        local dropdownArrow = Instance.new("TextLabel")
        
        dropdownFrame.Name = "DropdownFrame"
        dropdownFrame.Parent = Main
        dropdownFrame.BackgroundTransparency = 1
        dropdownFrame.Size = UDim2.new(1, -20, 0, 30)
        dropdownFrame.Position = UDim2.new(0, 10, currentY, 0)
        
        dropdownLabel.Name = "Label"
        dropdownLabel.Parent = dropdownFrame
        dropdownLabel.BackgroundTransparency = 1
        dropdownLabel.Size = UDim2.new(1, -60, 1, 0)
        dropdownLabel.Font = Enum.Font.SourceSans
        dropdownLabel.Text = config.text or "Dropdown"
        dropdownLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
        dropdownLabel.TextSize = 14
        dropdownLabel.TextXAlignment = Enum.TextXAlignment.Left
        
        dropdownButton.Name = "Dropdown"
        dropdownButton.Parent = dropdownFrame
        dropdownButton.BackgroundColor3 = Color3.fromRGB(60, 60, 60)
        dropdownButton.BorderSizePixel = 0
        dropdownButton.Size = UDim2.new(0, 120, 0, 25)
        dropdownButton.Position = UDim2.new(1, -120, 0.5, -12)
        dropdownButton.Font = Enum.Font.SourceSans
        dropdownButton.Text = defaultOption
        dropdownButton.TextColor3 = Color3.fromRGB(255, 255, 255)
        dropdownButton.TextSize = 12
        
        local dropdownCorner = Instance.new("UICorner")
        dropdownCorner.CornerRadius = UDim.new(0, 5)
        dropdownCorner.Parent = dropdownButton
        
        currentY = currentY + yIncrement
        
        return {
            SetOptions = function(newOptions)
                options = newOptions
            end,
            SetValue = function(value)
                dropdownButton.Text = value
                if config.callback then
                    config.callback(value)
                end
            end,
            GetValue = function()
                return dropdownButton.Text
            end,
            SetVisible = function(visible)
                dropdownFrame.Visible = visible
            end
        }
    end

    return functions
end

-- Alternative function names for compatibility
function LuaLibrary:NewGUI(options)
    return self.CreateGUI(options)
end

function LuaLibrary:MakeGUI(options)
    return self.CreateGUI(options)
end
ha\=
function LuaLibrary:Creator(options)
    return self.CreateGUI(options)
end

-- Return the library
return LuaLibrary
